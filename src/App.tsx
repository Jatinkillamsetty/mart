import { FormEvent, useEffect, useMemo, useState } from "react";
import { User } from "@supabase/supabase-js";
import { supabase } from "./lib/supabaseClient";
import glassProduct from "./assets/glass-product.jpg";
import {
  HARDWARE_MRP,
  hardwareGroups,
  getBrandCards,
  getAllHardwareCards,
  PLYWOOD_BOARDS_PRODUCTS,
  CORE_CATEGORIES,
  ALL_BRANDS,
  ALL_MATERIALS,
  ALL_FINISHES,
  HwBrandCard,
  HwGroup,
  HwCategory,
  BRAND_DETAILS,
  BrandDetail,
} from "./hardwareData";
import {
  getHardwareVariantStock,
  HardwareVariantRecord,
  loadHardwareCatalogFromSupabase,
} from "./hardwareSupabase";
import "./App.css";
import AdminDashboard from "./AdminDashboard";
import { CategoryGraphic } from "./CategoryIllustrations";

type Page =
  | "home"
  | "products"
  | "product"
  | "services"
  | "contact"
  | "login"
  | "account"
  | "cart"
  | "checkout"
  | "confirmation"
  | "orders"
  | "wishlist"
  | "admin";

type CartItem = {
  id: string;
  name: string;
  description?: string;
  price: number;
  quantity: number;
  image?: string;
  category?: string;
  kind: "product" | "hardware";
  options?: Record<string, string>;
  stock?: number;
  brand?: string;
  sku?: string;
};

type Order = {
  id: string;
  user_id?: string;
  created_at: string;
  items: CartItem[];
  total: number;
  status: string;
  customer_name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  pin: string;
};

type Enquiry = {
  id?: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  requirements: string;
  created_at?: string;
  status?: string;
};

const SERVICES = [
  "Architectural Glass",
  "Shower Enclosures",
  "Glass Fittings & Hardware",
  "Custom Mirrors",
  "Glass Partitioning",
  "Window & Door Systems",
];

const storefrontCategoryCards: { name: string; icon: string; description: string; action: Page }[] = [
  { name: "Spider Fittings", icon: "🕷️", description: "Stainless steel point-fixed glazing hardware for curtain walls & canopy glass.", action: "products" },
  { name: "Patch Fittings", icon: "🚪", description: "Heavy-duty glass door patch fittings, bottom locks & top pivots.", action: "products" },
  { name: "Floor Springs", icon: "⚙️", description: "Hydraulic floor springs & door closers for frameless glass doors.", action: "products" },
  { name: "Shower Enclosures", icon: "🚿", description: "Hinges, wall clamps, stabiliser bars & magnetic seals for glass shower cubicles.", action: "products" },
  { name: "Glass Handles", icon: "✊", description: "Pull handles, back-to-back handles & knob locks for glass and timber doors.", action: "products" },
  { name: "Sliding Systems", icon: "↔️", description: "Top-hung heavy duty sliding door rollers, tracks & soft-close dampers.", action: "products" },
];

const money = (n: number) => `₹${Number(n || 0).toLocaleString("en-IN")}`;

export function App() {
  const [page, setPage] = useState<Page>("home");
  const [user, setUser] = useState<User | null>(null);
  const [userRole, setUserRole] = useState("");
  const [toast, setToast] = useState("");

  // Cart & Wishlist
  const [cart, setCart] = useState<CartItem[]>(() =>
    JSON.parse(localStorage.getItem("glassmart-cart") || "[]")
  );
  const [wishlist, setWishlist] = useState<string[]>(() =>
    JSON.parse(localStorage.getItem("glassmart-wishlist") || "[]")
  );

  // Search & Navigation
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);

  // Filter State for Product Catalog
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubcategory, setSelectedSubcategory] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedSize, setSelectedSize] = useState("All");
  const [selectedMaterial, setSelectedMaterial] = useState("All");
  const [selectedFinish, setSelectedFinish] = useState("All");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc" | "brand">("featured");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Active Selected Product Details
  const [activeItem, setActiveItem] = useState<HwBrandCard | null>(null);
  const [selectedItemOptions, setSelectedItemOptions] = useState<{ size: string; material: string; finish: string }>({
    size: "",
    material: "",
    finish: "",
  });
  const [pdpQuantity, setPdpQuantity] = useState(1);

  // Location Modal
  const [selectedLocation, setSelectedLocation] = useState(
    () => localStorage.getItem("glassmart-location") || "Select your location"
  );
  const [showLocation, setShowLocation] = useState(false);
  const [locationText, setLocationText] = useState("");
  const [locationPin, setLocationPin] = useState("");

  // Hardware Database & Dynamic Catalog
  const [hardwareCatalog, setHardwareCatalog] = useState<HwGroup[]>(hardwareGroups);
  const [hardwareVariants, setHardwareVariants] = useState<HardwareVariantRecord[]>([]);

  // Auth Form State
  const [authMode, setAuthMode] = useState<"login" | "register">("login");
  const [authEmail, setAuthEmail] = useState("");
  const [authPassword, setAuthPassword] = useState("");
  const [authConfirm, setAuthConfirm] = useState("");
  const [authName, setAuthName] = useState("");
  const [authPhone, setAuthPhone] = useState("");
  const [accountType, setAccountType] = useState<"customer" | "carpenter" | "interior" | "engineer" | "architect">("customer");
  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState("");

  // Orders State
  const [orders, setOrders] = useState<Order[]>([]);
  const [ordersLoading, setOrdersLoading] = useState(false);
  const [checkout, setCheckout] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pin: "",
  });
  const [checkoutError, setCheckoutError] = useState("");
  const [placingOrder, setPlacingOrder] = useState(false);
  const [lastOrder, setLastOrder] = useState<Order | null>(null);

  // Enquiry State
  const [enquiry, setEnquiry] = useState<Enquiry>({ name: "", phone: "", email: "", service: "", requirements: "" });
  const [enquiryLoading, setEnquiryLoading] = useState(false);
  const [enquiryMessage, setEnquiryMessage] = useState("");

  const notify = (msg: string) => {
    setToast(msg);
    window.setTimeout(() => setToast(""), 2600);
  };

  const navigate = (next: Page) => {
    setPage(next);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Sync Hardware Catalog from Supabase
  const loadHardwareCatalog = async () => {
    const result = await loadHardwareCatalogFromSupabase();
    if (result.groups?.length) {
      setHardwareCatalog(result.groups);
      setHardwareVariants(result.variants);
    }
  };

  const loadProfile = async (currentUser: User | null) => {
    if (!currentUser) {
      setUserRole("");
      return;
    }
    const { data } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", currentUser.id)
      .maybeSingle();
    setUserRole(data?.role || "");
  };

  useEffect(() => {
    loadHardwareCatalog();
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
      loadProfile(data.user);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
      loadProfile(session?.user || null);
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    localStorage.setItem("glassmart-cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("glassmart-wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    if (user) {
      setCheckout(c => ({
        ...c,
        email: user.email || "",
        name: String(user.user_metadata?.name || ""),
        phone: String(user.user_metadata?.phone || ""),
      }));
    }
  }, [user]);

  // All Product Cards derived from catalog
  const allCatalogCards: HwBrandCard[] = useMemo(() => {
    const list: HwBrandCard[] = [];
    if (hardwareCatalog.length > 0) {
      hardwareCatalog.forEach(g => {
        g.categories.forEach(c => {
          getBrandCards(c, g.name).forEach(b => list.push(b));
        });
      });
    }
    const baseCards = list.length > 0 ? list : getAllHardwareCards();
    const missingPlywood = PLYWOOD_BOARDS_PRODUCTS.filter(
      p => !baseCards.some(b => (b.sku && b.sku === p.sku) || (b.name && b.name === p.name))
    );
    return [...baseCards, ...missingPlywood];
  }, [hardwareCatalog]);

  const availableSubcategories = useMemo(() => {
    const set = new Set<string>();
    allCatalogCards.forEach(item => {
      if (item.subcategory) {
        if (selectedCategory === "All") {
          set.add(item.subcategory);
        } else {
          const catObj = CORE_CATEGORIES.find(
            c => c.id === selectedCategory || c.name.toLowerCase() === selectedCategory.toLowerCase()
          );
          const matchName = catObj ? catObj.name.toLowerCase() : selectedCategory.toLowerCase();
          if (
            item.categoryName.toLowerCase().includes(matchName) ||
            matchName.includes(item.categoryName.toLowerCase())
          ) {
            set.add(item.subcategory);
          }
        }
      }
    });
    return Array.from(set);
  }, [allCatalogCards, selectedCategory]);

  // Filtered Cards
  const filteredCatalogCards = useMemo(() => {
    return allCatalogCards
      .filter(item => {
        // Search
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase().trim();
          const terms = q.split(/\s+/).filter(Boolean);
          const text = [
            item.name || "",
            item.brand,
            item.categoryName,
            item.subcategory || "",
            item.groupName,
            item.description || "",
            ...(item.bestFor || []),
            ...(item.features || []),
            ...(item.sizes || []),
            ...(item.materials || []),
            ...(item.finishes || []),
          ]
            .join(" ")
            .toLowerCase();
          if (!terms.every(term => text.includes(term))) return false;
        }

        // Category filter
        if (selectedCategory !== "All") {
          const catObj = CORE_CATEGORIES.find(
            c => c.id === selectedCategory || c.name.toLowerCase() === selectedCategory.toLowerCase()
          );
          const matchName = catObj ? catObj.name.toLowerCase() : selectedCategory.toLowerCase();
          if (
            !item.categoryName.toLowerCase().includes(matchName) &&
            !matchName.includes(item.categoryName.toLowerCase())
          ) {
            return false;
          }
        }

        // Subcategory filter
        if (selectedSubcategory !== "All") {
          if (!item.subcategory || item.subcategory.toLowerCase() !== selectedSubcategory.toLowerCase()) {
            return false;
          }
        }

        // Brand filter
        if (selectedBrand !== "All" && item.brand.toLowerCase() !== selectedBrand.toLowerCase()) {
          return false;
        }

        // Size filter
        if (selectedSize !== "All" && !item.sizes?.includes(selectedSize)) {
          return false;
        }

        // Material filter
        if (selectedMaterial !== "All" && !item.materials?.some(m => m.toLowerCase().includes(selectedMaterial.toLowerCase()))) {
          return false;
        }

        // Finish filter
        if (selectedFinish !== "All" && !item.finishes?.some(f => f.toLowerCase().includes(selectedFinish.toLowerCase()))) {
          return false;
        }

        // Stock filter
        if (inStockOnly && item.stock <= 0) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === "price-asc") return (a.price || 0) - (b.price || 0);
        if (sortBy === "price-desc") return (b.price || 0) - (a.price || 0);
        if (sortBy === "brand") return a.brand.localeCompare(b.brand);
        return 0; // featured
      });
  }, [
    allCatalogCards,
    searchQuery,
    selectedCategory,
    selectedSubcategory,
    selectedBrand,
    selectedSize,
    selectedMaterial,
    selectedFinish,
    inStockOnly,
    sortBy,
  ]);

  // Search Autocomplete Suggestions
  const searchSuggestions = useMemo(() => {
    if (!searchQuery.trim() || searchQuery.length < 2) return [];
    const q = searchQuery.toLowerCase().trim();
    return allCatalogCards
      .filter(item =>
        [item.brand, item.categoryName, ...(item.sizes || []), ...(item.finishes || [])]
          .join(" ")
          .toLowerCase()
          .includes(q)
      )
      .slice(0, 5);
  }, [searchQuery, allCatalogCards]);

  // Cart Operations
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const toggleWishlist = (key: string) => {
    setWishlist(curr => {
      const exists = curr.includes(key);
      if (exists) {
        notify("Removed from wishlist");
        return curr.filter(k => k !== key);
      } else {
        notify("Added to wishlist");
        return [...curr, key];
      }
    });
  };

  const getItemStock = (item: HwBrandCard, opts: { size: string; material: string; finish: string }) => {
    if (hardwareVariants.length > 0 && opts.size) {
      return getHardwareVariantStock(hardwareVariants, item.groupName, item.categoryName, item.brand, {
        size: opts.size || "Standard",
        material: opts.material || "Standard",
        finish: opts.finish || "Standard",
      });
    }
    return item.stock ?? 10;
  };

  const addToCartFromCard = (item: HwBrandCard, chosenOptions?: { size: string; material: string; finish: string }) => {
    const size = chosenOptions?.size || item.sizes?.[0] || "Standard";
    const material = chosenOptions?.material || item.materials?.[0] || "Standard";
    const finish = chosenOptions?.finish || item.finishes?.[0] || "Standard";
    const options = { Size: size, Material: material, Finish: finish };

    const stock = getItemStock(item, { size, material, finish });
    if (stock <= 0) return notify("Item is out of stock.");

    const key = `hw:${item.groupName}:${item.categoryName}:${item.brand}:${JSON.stringify(options)}`;
    const price = item.price || HARDWARE_MRP;

    setCart(curr => {
      const existing = curr.find(i => i.id === key);
      if (existing) {
        return curr.map(i =>
          i.id === key ? { ...i, quantity: Math.min(i.quantity + 1, stock), stock } : i
        );
      } else {
        return [
          ...curr,
          {
            id: key,
            name: `${item.brand} ${item.categoryName}`,
            description: `${item.groupName} · ${size} · ${finish}`,
            price,
            quantity: 1,
            image: item.image,
            category: item.categoryName,
            kind: "hardware",
            options,
            stock,
            brand: item.brand,
            sku: item.sku,
          },
        ];
      }
    });
    notify(`${item.brand} ${item.categoryName} added to cart`);
  };

  const openProductDetail = (item: HwBrandCard) => {
    setActiveItem(item);
    setSelectedItemOptions({
      size: item.sizes?.[0] || "",
      material: item.materials?.[0] || "",
      finish: item.finishes?.[0] || "",
    });
    setPdpQuantity(1);
    navigate("product");
  };

  const updateQty = (id: string, delta: number) => {
    setCart(curr =>
      curr
        .map(i => {
          if (i.id !== id) return i;
          const maxStock = Number.isFinite(i.stock) && Number(i.stock) > 0 ? Number(i.stock) : Infinity;
          return { ...i, quantity: Math.min(maxStock, Math.max(0, i.quantity + delta)) };
        })
        .filter(i => i.quantity > 0)
    );
  };

  const removeItem = (id: string) => {
    setCart(curr => curr.filter(i => i.id !== id));
    notify("Item removed from cart");
  };

  const clearCart = () => {
    setCart([]);
    notify("Cart cleared");
  };

  // Auth Operations
  const handleAuth = async (e?: FormEvent) => {
    e?.preventDefault();
    setAuthError("");
    if (!authEmail || !authPassword) return setAuthError("Email and password are required.");
    if (authMode === "register") {
      if (!authName || !authPhone) return setAuthError("Name and phone are required.");
      if (authPassword.length < 6) return setAuthError("Password must be at least 6 characters.");
      if (authPassword !== authConfirm) return setAuthError("Passwords do not match.");
    }
    setAuthLoading(true);

    if (authMode === "register") {
      const { data, error } = await supabase.auth.signUp({
        email: authEmail,
        password: authPassword,
        options: { data: { name: authName, phone: authPhone, account_type: accountType } },
      });
      if (error) setAuthError(error.message);
      else if (data.user) {
        const { error: profileError } = await supabase.from("profiles").upsert({
          id: data.user.id,
          email: authEmail,
          role: accountType,
          points: 0,
        });
        if (profileError) setAuthError(`Account created, but profile error: ${profileError.message}`);
        else {
          notify("Account created successfully!");
          setAuthMode("login");
        }
      }
    } else {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: authEmail,
        password: authPassword,
      });
      if (error) setAuthError(error.message);
      else {
        await loadProfile(data.user);
        notify("Logged in successfully");
        navigate("home");
      }
    }
    setAuthLoading(false);
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setUserRole("");
    notify("Logged out");
    navigate("home");
  };

  // Location selector
  const selectLocation = (val: string) => {
    const clean = val.trim();
    if (!clean) return;
    setSelectedLocation(clean);
    localStorage.setItem("glassmart-location", clean);
    setShowLocation(false);
    notify("Delivery location updated");
  };

  // Order Placement
  const loadOrders = async () => {
    if (!user) {
      navigate("login");
      return;
    }
    setOrdersLoading(true);
    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });
    if (!error && data) setOrders(data as Order[]);
    else if (error) notify(`Orders could not be loaded: ${error.message}`);
    setOrdersLoading(false);
  };

  const placeOrder = async (e: FormEvent) => {
    e.preventDefault();
    setCheckoutError("");
    if (!user) return navigate("login");
    if (!cart.length) return setCheckoutError("Your cart is empty.");
    if (Object.values(checkout).some(v => !v.trim()))
      return setCheckoutError("Please complete every required delivery field.");

    setPlacingOrder(true);
    const orderPayload = {
      user_id: user.id,
      items: cart,
      total: cartTotal,
      status: "Order placed",
      customer_name: checkout.name,
      phone: checkout.phone,
      email: checkout.email,
      address: checkout.address,
      city: checkout.city,
      state: checkout.state,
      pin: checkout.pin,
    };

    const { data, error } = await supabase.from("orders").insert(orderPayload).select().single();
    if (error) {
      setCheckoutError(`Order could not be placed: ${error.message}`);
      setPlacingOrder(false);
      return;
    }

    setLastOrder(data as Order);
    setCart([]);
    setPlacingOrder(false);
    navigate("confirmation");
  };

  // Direct render for Admin Dashboard
  if (page === "admin" && userRole === "admin") {
    return <AdminDashboard navigate={setPage} onLogout={logout} />;
  }

  return (
    <div className="app">
      {/* TOAST NOTIFICATION */}
      {toast && <div className="toast">{toast}</div>}

      {/* HEADER NAVBAR */}
      <header className="navbar">
        <button
          className="logo"
          onClick={() => navigate(userRole === "admin" ? "admin" : "home")}
        >
          <span>GLASS</span>MART
          <small>HARDWARE & ARCHITECTURAL SUPPLIES</small>
        </button>

        {userRole !== "admin" && (
          <button className="delivery-location" onClick={() => setShowLocation(true)}>
            <span className="loc-icon">📍</span>
            <span>
              <small>Deliver to</small>
              <strong>{selectedLocation}</strong>
            </span>
          </button>
        )}

        {userRole !== "admin" && (
          <div className="search-container">
            <input
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
              onKeyDown={e => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  navigate("products");
                }
              }}
              placeholder="Search hinges, handles, aldrops, channels..."
              className="search-input"
              autoComplete="off"
            />
            <button
              className="search-button"
              type="button"
              onClick={() => navigate("products")}
            >
              ⌕
            </button>

            {/* AUTOCOMPLETE POPUP */}
            {searchFocused && searchSuggestions.length > 0 && (
              <div className="search-suggestions">
                {searchSuggestions.map((s, idx) => (
                  <button
                    key={`${s.brand}-${s.categoryName}-${idx}`}
                    className="suggestion-item"
                    onClick={() => {
                      openProductDetail(s);
                      setSearchQuery("");
                    }}
                  >
                    <span className="sugg-brand">{s.brand}</span>
                    <span className="sugg-name">{s.categoryName}</span>
                    <span className="sugg-meta">{s.sizes?.join(", ")}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="nav-right">
          {userRole === "admin" && (
            <button className="primary-btn" onClick={() => navigate("admin")}>
              Admin Panel
            </button>
          )}

          <button
            className="header-nav-link"
            onClick={() => (user ? navigate("account") : navigate("login"))}
          >
            <small>{user ? `Hello, ${user.user_metadata?.name || "User"}` : "Welcome"}</small>
            <strong>{user ? "My Account" : "Sign In / Register"}</strong>
          </button>

          <button
            className="header-nav-link"
            onClick={() => {
              if (!user) navigate("login");
              else {
                loadOrders();
                navigate("orders");
              }
            }}
          >
            <small>Returns</small>
            <strong>& Orders</strong>
          </button>

          <button
            className="wishlist-btn"
            title="Wishlist"
            onClick={() => navigate("wishlist")}
          >
            <span className="wish-icon">🤍</span>
            {wishlist.length > 0 && <span className="badge">{wishlist.length}</span>}
          </button>

          {userRole !== "admin" && (
            <button className="cart-btn" onClick={() => navigate("cart")}>
              <span className="cart-icon">🛒</span>
              <strong>Cart</strong>
              {cartCount > 0 && <b className="cart-count">{cartCount}</b>}
            </button>
          )}

          <button
            className="hamburger-btn"
            onClick={() => setMobileMenuOpen(prev => !prev)}
            aria-label="Toggle Navigation"
          >
            ☰
          </button>
        </div>
      </header>

      {/* 12 CORE CATEGORIES BAR */}
      {userRole !== "admin" && (
        <nav className={`category-nav-bar ${mobileMenuOpen ? "mobile-open" : ""}`}>
          <div className="category-nav-scroll">
            <button
              className={`cat-nav-item ${selectedCategory === "All" ? "active" : ""}`}
              onClick={() => {
                setSelectedCategory("All");
                navigate("products");
              }}
            >
              All Hardware
            </button>
            {CORE_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                className={`cat-nav-item ${selectedCategory === cat.id ? "active" : ""}`}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  navigate("products");
                }}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </nav>
      )}

      {/* LOCATION SELECTOR MODAL */}
      {showLocation && (
        <div className="modal-backdrop" onClick={() => setShowLocation(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowLocation(false)}>
              ×
            </button>
            <p className="eyebrow">DELIVERY LOCATION</p>
            <h2>Select Delivery Destination</h2>
            <p className="modal-sub">
              Enter your city or postal PIN code to check regional hardware availability.
            </p>
            <input
              value={locationText}
              onChange={e => setLocationText(e.target.value)}
              placeholder="City / Area (e.g. Bangalore, Mumbai)"
            />
            <input
              value={locationPin}
              onChange={e => setLocationPin(e.target.value)}
              placeholder="PIN / Postal Code"
            />
            <div className="modal-actions">
              <button
                className="secondary-btn"
                onClick={() => selectLocation("Bangalore Central - 560001")}
              >
                Set Default
              </button>
              <button
                className="primary-btn"
                onClick={() =>
                  selectLocation(
                    locationText
                      ? `${locationText}${locationPin ? `, ${locationPin}` : ""}`
                      : locationPin || "Selected Location"
                  )
                }
              >
                Save Location
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PAGE CONTENT ROUTER */}

      {/* 1. HOMEPAGE */}
      {page === "home" && <main className="storefront-home">
        {/* HERO SECTION */}
        <section className="storefront-hero">
          <div className="storefront-hero-copy">
            <p className="storefront-kicker">SOUTH INDIA'S PREMIER ARCHITECTURAL DESTINATION</p>
            <h1>Certified Glass & World-Class Door Hardware</h1>
            <p>Authorized distributor for global engineering leaders. Explore 15+ top hardware brands with transparent pricing, guaranteed authenticity, and direct site support.</p>
            
            <div className="storefront-hero-stats">
              <div><strong>15+</strong><span>Top Global Brands</span></div>
              <div><strong>10,000+</strong><span>Completed Projects</span></div>
              <div><strong>25+ Yrs</strong><span>Architectural Trust</span></div>
            </div>

            <div className="storefront-hero-actions">
              <button className="primary-btn" onClick={() => navigate("products")}>Explore All Products</button>
              <a className="secondary-btn" href="#brand-showcase">View Partner Brands</a>
              <button className="secondary-btn" onClick={() => navigate("services")}>Request Project Quote</button>
            </div>
          </div>

          <div className="storefront-hero-image">
            <img src={glassProduct} alt="Glassmart architectural hardware showcase"/>
            <div className="storefront-hero-tag">
              <strong>100% Factory Genuine Guarantee</strong>
              <span>Ozone • Dormakaba • Häfele • Hettich • Ebco • Jyothi</span>
            </div>
          </div>
        </section>

        {/* TRUST BENEFITS STRIP */}
        <section className="storefront-benefits">
          <div><strong>Authorized Distributor</strong><span>Direct factory relationship with 100% genuine warranty</span></div>
          <div><strong>Grade 304 SS & Solid Brass</strong><span>Tested for coastal weather, heavy traffic & zero corrosion</span></div>
          <div><strong>5,000 Sq. Ft. Live Showroom</strong><span>Experience working sliding glass partitions & hydraulic springs</span></div>
          <div><strong>Architect & Site Guidance</strong><span>Hole cutout templates, glass load specs & blue print support</span></div>
        </section>

        {/* SHOP STORY & LEGACY SECTION */}
        <section className="storefront-story-section">
          <div className="storefront-story-container">
            <div className="storefront-story-badge">OUR HERITAGE & MISSION</div>
            <h2>Built on Precision, Authenticity & Architectural Excellence Since 1998</h2>
            <p className="storefront-story-lead">
              What started as a specialized glass cutting workshop in 1998 has grown into South India's most trusted destination for premium architectural glass fittings, spider glazing systems, hydraulic door controls, and furniture hardware.
            </p>
            <p className="storefront-story-body">
              Whether you are an architect detailing a structural glass facade, an interior contractor building luxury shower enclosures, or a homeowner upgrading entrance door handles, Glass Mart bridges the gap between world-class engineering and seamless supply chain delivery.
            </p>

            <div className="storefront-story-grid">
              <div className="story-card">
                <div className="story-icon">🏭</div>
                <h3>5,000 Sq. Ft. Live Display Center</h3>
                <p>Walk through our state-of-the-art showroom featuring live working demonstrations of hydraulic floor springs, automatic sliding doors, shower cubicles, and patch fittings.</p>
              </div>
              <div className="story-card">
                <div className="story-icon">🛡️</div>
                <h3>100% Certified Originals</h3>
                <p>We source directly from manufacturers like Dormakaba, Ozone, Häfele, Hettich, and Ebco. Zero counterfeits, 100% peace of mind with full manufacturer warranties.</p>
              </div>
              <div className="story-card">
                <div className="story-icon">📐</div>
                <h3>Blueprint & Technical Assistance</h3>
                <p>Our dedicated site engineers review your project blue prints, recommend correct glass thickness (8mm, 10mm, 12mm), and supply exact cutout dimensions.</p>
              </div>
              <div className="story-card">
                <div className="story-icon">🚚</div>
                <h3>10,000+ Ready Warehouse Inventory</h3>
                <p>Centralized warehousing ensures bulk orders, contractor shipments, and emergency site replacements are dispatched within 24 hours.</p>
              </div>
            </div>
          </div>
        </section>

        {/* BRAND SHOWCASE & BRAND STORIES SECTION */}
        <section className="storefront-section brand-showcase-section" id="brand-showcase">
          <div className="section-heading">
            <p className="eyebrow">OUR AUTHORIZED BRAND PARTNERS</p>
            <h2>World-Class Brands Under One Roof</h2>
            <p>Click any brand to explore their specialized story, engineering legacy, and hardware catalogue.</p>
          </div>

          <div className="brand-cards-grid">
            {BRAND_DETAILS.map((brand: BrandDetail) => (
              <div className="brand-spotlight-card" key={brand.id} style={{ borderTopColor: brand.color }}>
                <div className="brand-card-header">
                  <div>
                    <span className="brand-country">{brand.country}</span>
                    <h3>{brand.name}</h3>
                  </div>
                  <span className="brand-badge" style={{ backgroundColor: brand.color }}>{brand.badge}</span>
                </div>
                <p className="brand-tagline">{brand.tagline}</p>
                <p className="brand-story-text">{brand.story}</p>
                <div className="brand-specialty-pill">
                  <strong>Specialty:</strong> {brand.specialty}
                </div>
                <button
                  className="primary-btn brand-shop-btn"
                  onClick={() => {
                    setSelectedBrand(brand.name.split("/")[0].trim());
                    navigate("products");
                  }}
                >
                  Shop {brand.name} Hardware →
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* EXPLORE CATEGORIES GRID SECTION (Matching Image 2) */}
        <section className="section explore-categories-section">
          <div className="section-heading centered">
            <p className="eyebrow">HARDWARE CATALOGUE</p>
            <h2>Explore Categories</h2>
            <p>Browse high-grade stainless steel, brass, and heavy-duty architectural fittings designed for modern doors, windows, and modular cabinetry.</p>
          </div>

          <div className="explore-categories-grid">
            {CORE_CATEGORIES.map(cat => (
              <div
                key={cat.id}
                className="category-explore-card"
                onClick={() => {
                  setSelectedCategory(cat.id);
                  navigate("products");
                }}
              >
                <div className="cat-graphic-container">
                  <CategoryGraphic id={cat.id} />
                </div>

                <div className="cat-card-footer-stats">
                  <span className="cat-count">{cat.countText}</span>
                  <button className="cat-plus-btn" aria-label="Explore category">+</button>
                </div>

                <div className="cat-card-body">
                  <h3>{cat.name}</h3>
                  <p>{cat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* POPULAR CATALOGUE PRODUCTS */}
        <section className="section storefront-products-strip">
          <div className="section-heading">
            <p className="eyebrow">FEATURED HARDWARE</p>
            <h2>Trending Hardware & Glass Products</h2>
            <p>Real-time stock and prices straight from our warehouse database.</p>
          </div>
          <div className="products-grid storefront-product-grid">
            {filteredCatalogCards.slice(0, 8).map((p: HwBrandCard) => (
              <article className="product-card" key={`${p.groupName}-${p.categoryName}-${p.brand}`}>
                <div className="product-image">
                  {p.image ? <img src={p.image} alt={p.brand} /> : <span>GLASSMART</span>}
                </div>
                <div className="product-info">
                  <p className="product-category">{p.categoryName}</p>
                  <h3>{p.brand} {p.categoryName}</h3>
                  <p className="product-description">{p.groupName}</p>
                  <div className="product-pricing">
                    <strong>{money(Number(p.price || HARDWARE_MRP))}</strong>
                  </div>
                  <p className={p.stock > 0 ? "product-stock" : "product-stock out"}>
                    {p.stock > 0 ? `${p.stock} in stock` : "Out of stock"}
                  </p>
                  <div className="card-actions">
                    <button className="primary-btn" disabled={p.stock <= 0} onClick={() => addToCartFromCard(p)}>
                      Add to Cart
                    </button>
                    <button className="secondary-btn" onClick={() => openProductDetail(p)}>
                      View Specs
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="storefront-centered-action">
            <button className="primary-btn" onClick={() => navigate("products")}>
              View Complete Catalogue ({allCatalogCards.length} Products) →
            </button>
          </div>
        </section>

        {/* PROJECT CONSULTATION & SHOWROOM BANNER */}
        <section className="section storefront-service-banner">
          <div>
            <p className="eyebrow">COMMERCIAL & RESIDENTIAL PROJECTS</p>
            <h2>Planning a Glass Facade, Office Partition or Hotel Renovation?</h2>
            <p>Work directly with our technical hardware consultants. Get custom glass dimension quotes, bulk tier pricing, and hardware schedules.</p>
          </div>
          <button className="primary-btn" onClick={() => navigate("services")}>
            Request Project Consultation
          </button>
        </section>
      </main>}
    {page === "products" && (
        <main className="page-container catalog-page">
          <div className="catalog-header">
            <div>
              <p className="eyebrow">HARDWARE CATALOG</p>
              <h1>
                {selectedCategory === "All"
                  ? "All Hardware Products"
                  : CORE_CATEGORIES.find(c => c.id === selectedCategory)?.name || selectedCategory}
              </h1>
              <p className="catalog-sub">
                Showing {filteredCatalogCards.length} verified hardware items
              </p>
            </div>

            <div className="catalog-controls">
              <button
                className="mobile-filter-trigger"
                onClick={() => setMobileFiltersOpen(true)}
              >
                ⚙ Filters ({[
                  selectedCategory !== "All",
                  selectedBrand !== "All",
                  selectedSize !== "All",
                  selectedMaterial !== "All",
                  selectedFinish !== "All",
                  inStockOnly,
                ].filter(Boolean).length})
              </button>

              <div className="sort-box">
                <label>Sort By:</label>
                <select value={sortBy} onChange={e => setSortBy(e.target.value as any)}>
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="brand">Brand Name</option>
                </select>
              </div>
            </div>
          </div>

          <div className="catalog-layout">
            {/* DESKTOP FILTER SIDEBAR & MOBILE DRAWER */}
            <aside className={`filter-sidebar ${mobileFiltersOpen ? "drawer-open" : ""}`}>
              <div className="filter-sidebar-head">
                <h3>Filter Products</h3>
                <button
                  className="filter-close-btn"
                  onClick={() => setMobileFiltersOpen(false)}
                >
                  ×
                </button>
              </div>

              <div className="filter-group">
                <label className="filter-label">Category</label>
                <select
                  value={selectedCategory}
                  onChange={e => setSelectedCategory(e.target.value)}
                >
                  <option value="All">All Categories</option>
                  {CORE_CATEGORIES.map(c => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="filter-group">
                <label className="filter-label">Brand</label>
                <select value={selectedBrand} onChange={e => setSelectedBrand(e.target.value)}>
                  <option value="All">All Brands</option>
                  {ALL_BRANDS.map(b => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>

              <div className="filter-group">
                <label className="filter-label">Size</label>
                <select value={selectedSize} onChange={e => setSelectedSize(e.target.value)}>
                  <option value="All">All Sizes</option>
                  {["3\"", "4\"", "5\"", "6\"", "7\"", "8\"", "10\"", "12\"", "14\"", "16\"", "18\"", "20\"", "24\"", "96mm", "160mm", "224mm", "256mm", "288mm"].map(s => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div className="filter-group">
                <label className="filter-label">Material</label>
                <select
                  value={selectedMaterial}
                  onChange={e => setSelectedMaterial(e.target.value)}
                >
                  <option value="All">All Materials</option>
                  {ALL_MATERIALS.map(m => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
              </div>

              <div className="filter-group">
                <label className="filter-label">Finish</label>
                <select
                  value={selectedFinish}
                  onChange={e => setSelectedFinish(e.target.value)}
                >
                  <option value="All">All Finishes</option>
                  {ALL_FINISHES.map(f => (
                    <option key={f} value={f}>
                      {f}
                    </option>
                  ))}
                </select>
              </div>

              <div className="filter-group check-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={e => setInStockOnly(e.target.checked)}
                  />
                  <span>In Stock Items Only</span>
                </label>
              </div>

              <button
                className="secondary-btn reset-filters-btn"
                onClick={() => {
                  setSelectedCategory("All");
                  setSelectedBrand("All");
                  setSelectedSize("All");
                  setSelectedMaterial("All");
                  setSelectedFinish("All");
                  setInStockOnly(false);
                  setSearchQuery("");
                }}
              >
                Reset All Filters
              </button>
            </aside>

            {/* PRODUCT GRID */}
            <div className="catalog-grid-wrap">
              {!filteredCatalogCards.length ? (
                <div className="empty-state">
                  <div className="empty-icon">⌕</div>
                  <h2>No matching hardware found</h2>
                  <p>Try adjusting your category, brand, size, or finish criteria.</p>
                  <button
                    className="primary-btn"
                    onClick={() => {
                      setSelectedCategory("All");
                      setSelectedBrand("All");
                      setSelectedSize("All");
                      setSelectedMaterial("All");
                      setSelectedFinish("All");
                      setInStockOnly(false);
                      setSearchQuery("");
                    }}
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                <div className="products-grid">
                  {filteredCatalogCards.map((item, idx) => {
                    const itemKey = `cat-${item.brand}-${item.categoryName}-${idx}`;
                    const isWish = wishlist.includes(itemKey);
                    return (
                      <article className="product-card" key={itemKey}>
                        <div
                          className="product-card-head"
                          onClick={() => openProductDetail(item)}
                        >
                          <span className="brand-badge">{item.brand}</span>
                          <button
                            className={`card-wishlist ${isWish ? "active" : ""}`}
                            onClick={e => {
                              e.stopPropagation();
                              toggleWishlist(itemKey);
                            }}
                            title="Add to Wishlist"
                          >
                            {isWish ? "❤️" : "🤍"}
                          </button>
                          <div className="product-card-image">
                            {item.image ? (
                              <img src={item.image} alt={item.name || item.brand} />
                            ) : (
                              <span className="placeholder-icon">
                                {item.categoryName === "Doors" ? "🚪" : item.categoryName.includes("Plywood") || item.categoryName.includes("Board") ? "🪵" : "⚙️"}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="product-info">
                          <div className="product-category-row">
                            <span className="product-category">{item.categoryName}</span>
                            {item.subcategory && (
                              <span className="chip chip-subcategory">{item.subcategory}</span>
                            )}
                          </div>

                          <h3 onClick={() => openProductDetail(item)}>
                            {item.name || `${item.brand} ${item.categoryName}`}
                          </h3>

                          {item.description && (
                            <p className="product-short-desc">{item.description}</p>
                          )}

                          <div className="variant-badges">
                            {item.warranty && (
                              <span className="chip chip-warranty">🛡️ {item.warranty} Warranty</span>
                            )}
                            {item.guarantee && (
                              <span className="chip chip-guarantee">⭐ {item.guarantee}</span>
                            )}
                            {item.density && (
                              <span className="chip chip-density">📐 {item.density}</span>
                            )}
                            {item.sizes?.map(s => (
                              <span key={s} className="chip chip-size">
                                {s}
                              </span>
                            ))}
                            {item.finishes?.map(f => (
                              <span key={f} className="chip chip-finish">
                                {f}
                              </span>
                            ))}
                          </div>

                          {item.bestFor && item.bestFor.length > 0 && (
                            <div className="card-best-for">
                              <small className="best-for-label">Best For:</small>
                              <div className="best-for-mini-chips">
                                {item.bestFor.slice(0, 3).map(b => (
                                  <span key={b} className="mini-chip">{b}</span>
                                ))}
                                {item.bestFor.length > 3 && (
                                  <span className="mini-chip count-more">+{item.bestFor.length - 3}</span>
                                )}
                              </div>
                            </div>
                          )}

                          <div className="product-pricing">
                            <strong>{item.price ? money(item.price) : "Quote on Request"}</strong>
                            <span className={item.stock > 0 ? "stock-in" : "stock-out"}>
                              {item.stock > 0 ? "✓ In Stock" : "Out of Stock"}
                            </span>
                          </div>

                          <div className="card-actions">
                            <button
                              className="secondary-btn"
                              onClick={() => openProductDetail(item)}
                            >
                              Details
                            </button>
                            <button
                              className="primary-btn"
                              disabled={item.stock <= 0}
                              onClick={() => addToCartFromCard(item)}
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </main>
      )}

      {/* 3. PRODUCT DETAILS PAGE (PDP) */}
      {page === "product" && activeItem && (
        <main className="page-container pdp-page">
          <button className="back-btn" onClick={() => navigate("products")}>
            ← Back to Catalog
          </button>

          <div className="pdp-layout">
            {/* GALLERY */}
            <div className="pdp-gallery">
              <div className="pdp-main-image">
                {activeItem.image ? (
                  <img src={activeItem.image} alt={activeItem.name || activeItem.brand} />
                ) : (
                  <div className="pdp-placeholder">
                    <span className="pdp-placeholder-icon">
                      {activeItem.categoryName === "Doors" ? "🚪" : activeItem.categoryName.includes("Plywood") || activeItem.categoryName.includes("Board") ? "🪵" : "⚙️"}
                    </span>
                    <p>{activeItem.name || `${activeItem.brand} ${activeItem.categoryName}`}</p>
                  </div>
                )}
              </div>
            </div>

            {/* PRODUCT DETAILS & VARIANT SELECTOR */}
            <div className="pdp-info">
              <div className="pdp-meta-top">
                <span className="pdp-brand">{activeItem.brand}</span>
                <span className="pdp-category-chip">{activeItem.categoryName}</span>
                {activeItem.subcategory && (
                  <span className="pdp-subcategory-chip">{activeItem.subcategory}</span>
                )}
              </div>

              <h1>{activeItem.name || `${activeItem.brand} ${activeItem.categoryName}`}</h1>
              <p className="pdp-sku">SKU: {activeItem.sku || "GM-HW-101"}</p>

              {activeItem.description && (
                <p className="pdp-description">{activeItem.description}</p>
              )}

              {/* Warranty / Guarantee / Density Badges */}
              {(activeItem.warranty || activeItem.guarantee || activeItem.density) && (
                <div className="pdp-highlights">
                  {activeItem.warranty && (
                    <div className="highlight-badge warranty-badge">
                      <span className="highlight-icon">🛡️</span>
                      <div>
                        <strong>Warranty</strong>
                        <p>{activeItem.warranty}</p>
                      </div>
                    </div>
                  )}
                  {activeItem.guarantee && (
                    <div className="highlight-badge guarantee-badge">
                      <span className="highlight-icon">⭐</span>
                      <div>
                        <strong>Guarantee</strong>
                        <p>{activeItem.guarantee}</p>
                      </div>
                    </div>
                  )}
                  {activeItem.density && (
                    <div className="highlight-badge density-badge">
                      <span className="highlight-icon">📐</span>
                      <div>
                        <strong>Density</strong>
                        <p>{activeItem.density}</p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div className="pdp-price-row">
                <span className="pdp-price">
                  {activeItem.price ? money(activeItem.price) : "Quote on Request"}
                </span>
                <span
                  className={
                    getItemStock(activeItem, selectedItemOptions) > 0
                      ? "pdp-stock stock-in"
                      : "pdp-stock stock-out"
                  }
                >
                  {getItemStock(activeItem, selectedItemOptions) > 0
                    ? `✓ In Stock (${getItemStock(activeItem, selectedItemOptions)} available)`
                    : "Out of Stock"}
                </span>
              </div>

              {/* BEST FOR */}
              {activeItem.bestFor && activeItem.bestFor.length > 0 && (
                <div className="pdp-section">
                  <label className="pdp-section-label">BEST FOR</label>
                  <div className="pdp-tags-wrap">
                    {activeItem.bestFor.map(item => (
                      <span key={item} className="pdp-tag">✓ {item}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* FEATURES & SPECIFICATIONS */}
              {activeItem.features && activeItem.features.length > 0 && (
                <div className="pdp-section">
                  <label className="pdp-section-label">KEY FEATURES & SPECIFICATIONS</label>
                  <ul className="pdp-features-list">
                    {activeItem.features.map(f => (
                      <li key={f}>
                        <span className="bullet">✔</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* VARIANT SELECTORS */}
              <div className="pdp-variants">
                {activeItem.sizes?.length ? (
                  <div className="variant-group">
                    <label>SELECT SIZE</label>
                    <div className="chip-picker">
                      {activeItem.sizes.map(s => (
                        <button
                          key={s}
                          type="button"
                          className={`chip-btn ${selectedItemOptions.size === s ? "selected" : ""}`}
                          onClick={() => setSelectedItemOptions(o => ({ ...o, size: s }))}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : null}

                {activeItem.materials?.length ? (
                  <div className="variant-group">
                    <label>SELECT MATERIAL</label>
                    <div className="chip-picker">
                      {activeItem.materials.map(m => (
                        <button
                          key={m}
                          type="button"
                          className={`chip-btn ${selectedItemOptions.material === m ? "selected" : ""}`}
                          onClick={() => setSelectedItemOptions(o => ({ ...o, material: m }))}
                        >
                          {m}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : null}

                {activeItem.finishes?.length ? (
                  <div className="variant-group">
                    <label>SELECT FINISH</label>
                    <div className="chip-picker">
                      {activeItem.finishes.map(f => (
                        <button
                          key={f}
                          type="button"
                          className={`chip-btn ${selectedItemOptions.finish === f ? "selected" : ""}`}
                          onClick={() => setSelectedItemOptions(o => ({ ...o, finish: f }))}
                        >
                          {f}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>

              {/* QUANTITY & ACTIONS */}
              <div className="pdp-actions">
                <div className="qty-selector">
                  <button
                    onClick={() => setPdpQuantity(q => Math.max(1, q - 1))}
                  >
                    −
                  </button>
                  <span>{pdpQuantity}</span>
                  <button
                    onClick={() =>
                      setPdpQuantity(q =>
                        Math.min(
                          getItemStock(activeItem, selectedItemOptions) || 99,
                          q + 1
                        )
                      )
                    }
                  >
                    +
                  </button>
                </div>

                <button
                  className="primary-btn add-btn"
                  disabled={getItemStock(activeItem, selectedItemOptions) <= 0}
                  onClick={() => {
                    for (let i = 0; i < pdpQuantity; i++) {
                      addToCartFromCard(activeItem, selectedItemOptions);
                    }
                  }}
                >
                  Add to Cart
                </button>

                <button
                  className="secondary-btn buy-now-btn"
                  disabled={getItemStock(activeItem, selectedItemOptions) <= 0}
                  onClick={() => {
                    addToCartFromCard(activeItem, selectedItemOptions);
                    navigate("cart");
                  }}
                >
                  Buy Now
                </button>
              </div>

              {/* SPECIFICATIONS */}
              <div className="pdp-specs">
                <h3>Technical Specifications</h3>
                <table>
                  <tbody>
                    <tr>
                      <th>Product Name</th>
                      <td>{activeItem.name || `${activeItem.brand} ${activeItem.categoryName}`}</td>
                    </tr>
                    <tr>
                      <th>Brand</th>
                      <td>{activeItem.brand}</td>
                    </tr>
                    <tr>
                      <th>Category</th>
                      <td>{activeItem.categoryName}</td>
                    </tr>
                    {activeItem.subcategory && (
                      <tr>
                        <th>Subcategory</th>
                        <td>{activeItem.subcategory}</td>
                      </tr>
                    )}
                    {activeItem.density && (
                      <tr>
                        <th>Density</th>
                        <td>{activeItem.density}</td>
                      </tr>
                    )}
                    {activeItem.warranty && (
                      <tr>
                        <th>Warranty</th>
                        <td>{activeItem.warranty}</td>
                      </tr>
                    )}
                    {activeItem.guarantee && (
                      <tr>
                        <th>Guarantee</th>
                        <td>{activeItem.guarantee}</td>
                      </tr>
                    )}
                    {activeItem.sizes?.length ? (
                      <tr>
                        <th>Available Sizes</th>
                        <td>{activeItem.sizes.join(", ")}</td>
                      </tr>
                    ) : null}
                    {activeItem.materials?.length ? (
                      <tr>
                        <th>Material</th>
                        <td>{activeItem.materials.join(", ")}</td>
                      </tr>
                    ) : null}
                    {activeItem.finishes?.length ? (
                      <tr>
                        <th>Finish Options</th>
                        <td>{activeItem.finishes.join(", ")}</td>
                      </tr>
                    ) : null}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* 4. WISHLIST PAGE */}
      {page === "wishlist" && (
        <main className="page-container">
          <div className="page-title">
            <p className="eyebrow">YOUR SAVED ITEMS</p>
            <h1>Wishlist ({wishlist.length})</h1>
          </div>

          {!wishlist.length ? (
            <div className="empty-state">
              <div className="empty-icon">🤍</div>
              <h2>Your wishlist is empty</h2>
              <p>Click the heart icon on products to save them for later.</p>
              <button className="primary-btn" onClick={() => navigate("products")}>
                Browse Hardware Catalog
              </button>
            </div>
          ) : (
            <div className="products-grid">
              {allCatalogCards
                .filter((_, idx) => wishlist.some(w => w.includes(`-${idx}`)))
                .map((item, idx) => (
                  <article className="product-card" key={`wish-${idx}`}>
                    <div className="product-card-head">
                      <span className="brand-badge">{item.brand}</span>
                      <div className="product-card-image">
                        {item.image ? (
                          <img src={item.image} alt={item.brand} />
                        ) : (
                          <span className="placeholder-icon">⚙️</span>
                        )}
                      </div>
                    </div>
                    <div className="product-info">
                      <h3>{item.brand} {item.categoryName}</h3>
                      <div className="product-pricing">
                        <strong>{money(item.price || HARDWARE_MRP)}</strong>
                      </div>
                      <button
                        className="primary-btn"
                        onClick={() => openProductDetail(item)}
                      >
                        View & Select Variant
                      </button>
                    </div>
                  </article>
                ))}
            </div>
          )}
        </main>
      )}

      {/* 5. SHOPPING CART */}
      {page === "cart" && (
        <main className="page-container">
          <div className="page-title">
            <p className="eyebrow">YOUR SHOPPING CART</p>
            <h1>Shopping Cart ({cartCount} items)</h1>
          </div>

          {!cart.length ? (
            <div className="empty-state">
              <div className="empty-icon">🛒</div>
              <h2>Your cart is currently empty</h2>
              <p>Explore door, window and cabinet hardware fittings to add items.</p>
              <button className="primary-btn" onClick={() => navigate("products")}>
                Browse Hardware Catalog
              </button>
            </div>
          ) : (
            <div className="cart-layout">
              <div className="cart-items-list">
                {cart.map(i => (
                  <div className="cart-item" key={i.id}>
                    <div className="cart-thumb">
                      {i.image ? (
                        <img src={i.image} alt={i.name} />
                      ) : (
                        <span>⚙️</span>
                      )}
                    </div>
                    <div className="cart-product-info">
                      <p className="product-category">{i.category}</p>
                      <h2>{i.name}</h2>
                      {i.options &&
                        Object.entries(i.options).map(([k, v]) => (
                          <small key={k}>
                            {k}: <strong>{v}</strong>
                          </small>
                        ))}
                      <p className="cart-unit-price">{money(i.price)} each</p>

                      <div className="quantity">
                        <button onClick={() => updateQty(i.id, -1)}>−</button>
                        <span>{i.quantity}</span>
                        <button
                          disabled={i.quantity >= Number(i.stock || Infinity)}
                          onClick={() => updateQty(i.id, 1)}
                        >
                          +
                        </button>
                      </div>

                      <button className="text-btn" onClick={() => removeItem(i.id)}>
                        Remove
                      </button>
                    </div>

                    <div className="cart-item-total">
                      <strong>{money(i.price * i.quantity)}</strong>
                    </div>
                  </div>
                ))}
              </div>

              <aside className="summary">
                <h2>Order Summary</h2>
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>{money(cartTotal)}</span>
                </div>
                <div className="summary-row">
                  <span>Tax & Duties</span>
                  <span>Included</span>
                </div>
                <div className="summary-row">
                  <span>Shipping & Delivery</span>
                  <span>Calculated at checkout</span>
                </div>
                <hr />
                <div className="summary-total">
                  <span>Total Amount</span>
                  <strong>{money(cartTotal)}</strong>
                </div>

                <button
                  className="primary-btn full"
                  onClick={() => (user ? navigate("checkout") : navigate("login"))}
                >
                  Proceed to Checkout →
                </button>
                <button className="secondary-btn full" onClick={clearCart}>
                  Clear Cart
                </button>
              </aside>
            </div>
          )}
        </main>
      )}

      {/* 6. CHECKOUT */}
      {page === "checkout" && (
        <main className="page-container">
          <div className="page-title">
            <p className="eyebrow">CHECKOUT</p>
            <h1>Complete Your Hardware Order</h1>
          </div>

          {!cart.length ? (
            <div className="empty-state">
              <h2>Your cart is empty</h2>
              <button className="primary-btn" onClick={() => navigate("products")}>
                Browse Hardware Catalog
              </button>
            </div>
          ) : (
            <form className="checkout-layout" onSubmit={placeOrder}>
              <div className="checkout-form">
                <h2>Delivery Information</h2>
                {(
                  [
                    ["name", "Full Name"],
                    ["email", "Email Address"],
                    ["phone", "Phone Number"],
                    ["address", "Delivery Address"],
                    ["city", "City"],
                    ["state", "State"],
                    ["pin", "PIN / Postal Code"],
                  ] as [keyof typeof checkout, string][]
                ).map(([key, label]) =>
                  key === "address" ? (
                    <label key={key}>
                      {label}
                      <textarea
                        required
                        value={checkout[key]}
                        onChange={e => setCheckout(c => ({ ...c, [key]: e.target.value }))}
                      />
                    </label>
                  ) : (
                    <label key={key}>
                      {label}
                      <input
                        required
                        value={checkout[key]}
                        onChange={e => setCheckout(c => ({ ...c, [key]: e.target.value }))}
                      />
                    </label>
                  )
                )}

                {checkoutError && <p className="form-error">{checkoutError}</p>}

                <button className="primary-btn full" disabled={placingOrder}>
                  {placingOrder ? "Placing Order..." : "Place Hardware Order"}
                </button>
              </div>

              <aside className="summary">
                <h2>Order Summary ({cartCount} items)</h2>
                {cart.map(i => (
                  <div className="summary-row" key={i.id}>
                    <span>
                      {i.name} × {i.quantity}
                    </span>
                    <span>{money(i.price * i.quantity)}</span>
                  </div>
                ))}
                <hr />
                <div className="summary-total">
                  <span>Total Amount</span>
                  <strong>{money(cartTotal)}</strong>
                </div>
              </aside>
            </form>
          )}
        </main>
      )}

      {/* 7. ORDER CONFIRMATION */}
      {page === "confirmation" && (
        <main className="page-container">
          <div className="confirmation-card">
            <div className="success-icon">✓</div>
            <p className="eyebrow">ORDER CONFIRMED</p>
            <h1>Thank you for your order!</h1>
            <p>Your hardware order has been received and sent to processing.</p>

            {lastOrder && (
              <div className="confirmation-summary">
                <div>
                  <strong>Order Reference</strong>
                  <span>{lastOrder.id}</span>
                </div>
                <div>
                  <strong>Total Paid</strong>
                  <span>{money(lastOrder.total)}</span>
                </div>
              </div>
            )}

            <button
              className="primary-btn"
              onClick={() => {
                if (user) {
                  loadOrders();
                  navigate("orders");
                } else {
                  navigate("home");
                }
              }}
            >
              View Order History
            </button>
          </div>
        </main>
      )}

      {/* 8. ORDER HISTORY */}
      {page === "orders" && (
        <main className="page-container">
          <div className="page-title">
            <p className="eyebrow">ACCOUNT ORDERS</p>
            <h1>Your Order History</h1>
          </div>

          {ordersLoading ? (
            <div className="loading-state">Loading your order history...</div>
          ) : !orders.length ? (
            <div className="empty-state">
              <h2>No past orders found</h2>
              <button className="primary-btn" onClick={() => navigate("products")}>
                Start Shopping
              </button>
            </div>
          ) : (
            <div className="orders-list">
              {orders.map(o => (
                <article className="order-card" key={o.id}>
                  <div className="order-card-head">
                    <div>
                      <p className="eyebrow">ORDER REF: {o.id}</p>
                      <small>{new Date(o.created_at).toLocaleString("en-IN")}</small>
                    </div>
                    <span className="order-status-badge">{o.status}</span>
                  </div>

                  <div className="order-card-body">
                    {(o.items || []).map(i => (
                      <div className="order-item-row" key={i.id}>
                        <span>
                          {i.name} × {i.quantity}
                        </span>
                        {i.options &&
                          Object.entries(i.options).map(([k, v]) => (
                            <small key={k}>
                              {k}: {v}
                            </small>
                          ))}
                        <strong>{money(i.price * i.quantity)}</strong>
                      </div>
                    ))}
                  </div>

                  <div className="order-card-foot">
                    <span>Delivery: {o.address}, {o.city}</span>
                    <strong>Total: {money(o.total)}</strong>
                  </div>
                </article>
              ))}
            </div>
          )}
        </main>
      )}

      {/* 9. SERVICES / QUOTE REQUEST */}
      {page === "services" && <main className="services-quote-page"><div className="services-quote-intro"><p className="services-quote-eyebrow">OUR SERVICES</p><h1>Need a Custom Solution?</h1><p>Tell us what you need and our team will get back to you.</p></div><div className="services-quote-card"><div className="services-quote-copy"><p className="services-quote-eyebrow">GET IN TOUCH</p><h2>Request a Quote</h2><p>Whether you're working on a home, restaurant, office or commercial project, tell us about your requirements.</p></div><form className="services-quote-form" onSubmit={async (e) => { e.preventDefault(); if (!enquiry.name || !enquiry.phone || !enquiry.email || !enquiry.service || !enquiry.requirements) { setEnquiryMessage("Please fill in all fields."); return; } setEnquiryLoading(true); setEnquiryMessage(""); const { error } = await supabase.from("enquiries").insert({ name: enquiry.name, phone: enquiry.phone, email: enquiry.email, service: enquiry.service, requirements: enquiry.requirements }); if (error) setEnquiryMessage(error.message); else { setEnquiryMessage("Enquiry submitted successfully. Our team will get back to you."); notify("Enquiry submitted successfully"); setEnquiry({ name: "", phone: "", email: "", service: "", requirements: "" }); } setEnquiryLoading(false); }}><label>Name<input value={enquiry.name} onChange={e => setEnquiry(v => ({ ...v, name: e.target.value }))} placeholder="Your name"/></label><label>Phone<input value={enquiry.phone} onChange={e => setEnquiry(v => ({ ...v, phone: e.target.value }))} placeholder="Phone number"/></label><label>Email<input type="email" value={enquiry.email} onChange={e => setEnquiry(v => ({ ...v, email: e.target.value }))} placeholder="Email address"/></label><label>Service required<select value={enquiry.service} onChange={e => setEnquiry(v => ({ ...v, service: e.target.value }))}><option value="">Select a service</option>{SERVICES.map((service: string) => <option key={service} value={service}>{service}</option>)}</select></label><label className="services-quote-requirements">Requirements<textarea value={enquiry.requirements} onChange={e => setEnquiry(v => ({ ...v, requirements: e.target.value }))} placeholder="Tell us what you need"/></label><div className="services-quote-submit"><button className="primary-btn" type="submit" disabled={enquiryLoading}>{enquiryLoading ? "Submitting..." : "Submit Enquiry"}</button></div>{enquiryMessage && <div className={enquiryMessage.toLowerCase().includes("success") ? "form-success services-quote-message" : "form-error services-quote-message"}>{enquiryMessage}</div>}</form></div></main>}
    {page === "contact" && (
        <main className="page-container">
          <div className="page-title">
            <p className="eyebrow">CONTACT GLASS MART</p>
            <h1>Get in Touch</h1>
            <p>Reach our technical hardware team for product specs, orders, and support.</p>
          </div>

          <div className="contact-grid">
            <div className="contact-card">
              <span className="contact-icon">📞</span>
              <p className="eyebrow">CUSTOMER SUPPORT</p>
              <h2>+91 98765 43210</h2>
              <p>Mon - Sat, 9:00 AM - 7:00 PM</p>
            </div>

            <div className="contact-card">
              <span className="contact-icon">✉️</span>
              <p className="eyebrow">EMAIL SUPPORT</p>
              <h2>support@glassmart.in</h2>
              <p>For order queries & technical datasheets</p>
            </div>

            <div className="contact-card">
              <span className="contact-icon">🏬</span>
              <p className="eyebrow">MAIN HARDWARE MART</p>
              <h2>Glass Mart Hardware Depot</h2>
              <p>Commercial Hardware Market, India</p>
            </div>
          </div>
        </main>
      )}

      {/* 11. LOGIN & REGISTER */}
      {page === "login" && (
        <main className="page-container login-page">
          <div className="login-box">
            <p className="eyebrow">GLASS MART ACCOUNT</p>
            <h1>{authMode === "login" ? "Sign In to Your Account" : "Create Customer Account"}</h1>

            <form onSubmit={handleAuth}>
              {authMode === "register" && (
                <>
                  <label>Full Name</label>
                  <input
                    value={authName}
                    onChange={e => setAuthName(e.target.value)}
                    placeholder="Enter your name"
                  />

                  <label>Phone Number</label>
                  <input
                    value={authPhone}
                    onChange={e => setAuthPhone(e.target.value)}
                    placeholder="Enter your phone"
                  />

                  <label>Account Category</label>
                  <div className="account-type-grid">
                    {(
                      [
                        ["customer", "Customer"],
                        ["carpenter", "Carpenter"],
                        ["interior", "Interior Designer"],
                        ["architect", "Architect"],
                      ] as const
                    ).map(([type, label]) => (
                      <button
                        key={type}
                        type="button"
                        className={`account-type ${accountType === type ? "active" : ""}`}
                        onClick={() => setAccountType(type)}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </>
              )}

              <label>Email Address</label>
              <input
                type="email"
                value={authEmail}
                onChange={e => setAuthEmail(e.target.value)}
                placeholder="email@domain.com"
              />

              <label>Password</label>
              <input
                type="password"
                value={authPassword}
                onChange={e => setAuthPassword(e.target.value)}
                placeholder="••••••••"
              />

              {authMode === "register" && (
                <>
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    value={authConfirm}
                    onChange={e => setAuthConfirm(e.target.value)}
                    placeholder="••••••••"
                  />
                </>
              )}

              {authError && <p className="form-error">{authError}</p>}

              <button className="primary-btn full" type="submit" disabled={authLoading}>
                {authLoading
                  ? "Processing..."
                  : authMode === "login"
                  ? "Sign In"
                  : "Create Account"}
              </button>

              <div className="login-switch">
                {authMode === "login" ? (
                  <p>
                    Don't have an account?{" "}
                    <button type="button" onClick={() => setAuthMode("register")}>
                      Register Now
                    </button>
                  </p>
                ) : (
                  <p>
                    Already have an account?{" "}
                    <button type="button" onClick={() => setAuthMode("login")}>
                      Sign In
                    </button>
                  </p>
                )}
              </div>
            </form>
          </div>
        </main>
      )}

      {/* 12. ACCOUNT PANEL */}
      {page === "account" && (
        <main className="page-container">
          <div className="account-panel">
            <p className="eyebrow">MY PROFILE</p>
            <h1>Account Overview</h1>

            <div className="account-details">
              <div>
                <span>Email Address</span>
                <strong>{user?.email || "N/A"}</strong>
              </div>
              <div>
                <span>Account Role</span>
                <strong>{userRole || "Customer"}</strong>
              </div>
            </div>

            <div className="account-actions">
              <button
                className="secondary-btn"
                onClick={() => {
                  loadOrders();
                  navigate("orders");
                }}
              >
                View Orders History
              </button>
              <button className="secondary-btn" onClick={() => navigate("wishlist")}>
                View Wishlist ({wishlist.length})
              </button>
              {userRole === "admin" && (
                <button className="primary-btn" onClick={() => navigate("admin")}>
                  Open Admin Control Panel
                </button>
              )}
              <button className="danger-btn" onClick={logout}>
                Log Out
              </button>
            </div>
          </div>
        </main>
      )}

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="logo">
              <span>GLASS</span>MART
            </span>
            <p>
              Premium door, window, cabinet & architectural hardware. Offering high quality products in
              stainless steel, brass, aluminium & specialized finishes.
            </p>
          </div>

          <div className="footer-col">
            <h4>12 Core Categories</h4>
            <ul>
              {CORE_CATEGORIES.slice(0, 6).map(c => (
                <li key={c.id}>
                  <button
                    onClick={() => {
                      setSelectedCategory(c.id);
                      navigate("products");
                    }}
                  >
                    {c.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Hardware Series</h4>
            <ul>
              {CORE_CATEGORIES.slice(6).map(c => (
                <li key={c.id}>
                  <button
                    onClick={() => {
                      setSelectedCategory(c.id);
                      navigate("products");
                    }}
                  >
                    {c.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Customer Support</h4>
            <ul>
              <li>
                <button onClick={() => navigate("contact")}>Contact Us</button>
              </li>
              <li>
                <button onClick={() => navigate("services")}>Project Quote</button>
              </li>
              <li>
                <button onClick={() => navigate("orders")}>Order History</button>
              </li>
              <li>
                <button onClick={() => navigate("login")}>Account Sign In</button>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Glass Mart Hardware Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
