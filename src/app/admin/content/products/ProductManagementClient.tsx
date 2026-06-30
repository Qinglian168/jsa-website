"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/components/admin/AuthProvider";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";
import { loadProducts, saveProducts, generateCategoryPageCode } from "@/lib/admin/data";
import type { ProductCategory, ProductItem, FAQItem } from "@/lib/admin/types";

const COLOR_OPTIONS = [
  { label: "蓝-靛蓝", value: "from-blue-500 to-indigo-600" },
  { label: "红-暗红", value: "from-rose-500 to-red-600" },
  { label: "天蓝-蓝", value: "from-sky-500 to-blue-600" },
  { label: "绿-青绿", value: "from-emerald-500 to-teal-600" },
  { label: "紫-暗紫", value: "from-purple-500 to-violet-600" },
  { label: "橙-琥珀", value: "from-orange-500 to-amber-600" },
  { label: "粉-玫红", value: "from-pink-500 to-fuchsia-600" },
  { label: "灰-暗灰", value: "from-gray-500 to-slate-600" },
];

const ICON_OPTIONS = [
  "🔀", "🔒", "🌐", "📞", "📡", "💻", "🖥️", "⚡", "🔊", "📷",
  "🔧", "📊", "🛡️", "💡", "🔑", "📦", "🚀", "☁️", "🧱", "🔌",
];

export default function ProductManagementClient() {
  const { isAuthenticated } = useAuth();
  const [categories, setCategories] = useState<ProductCategory[]>([]);
  const [activeCategory, setActiveCategory] = useState<ProductCategory | null>(null);
  const [editingCategory, setEditingCategory] = useState<ProductCategory | null>(null);
  const [editingProduct, setEditingProduct] = useState<ProductItem | null>(null);
  const [editingFaq, setEditingFaq] = useState<FAQItem | null>(null);
  const [generatedCode, setGeneratedCode] = useState("");
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);
  const [newBrandInput, setNewBrandInput] = useState("");
  const [newFeatureInput, setNewFeatureInput] = useState("");

  useEffect(() => {
    setCategories(loadProducts());
  }, []);

  if (!isAuthenticated) return null;

  // Category operations
  const handleSaveCategory = () => {
    if (!editingCategory) return;
    const updated = editingCategory.id
      ? categories.map((c) => (c.id === editingCategory.id ? editingCategory : c))
      : [...categories, { ...editingCategory, id: Date.now().toString() }];
    setCategories(updated);
    saveProducts(updated);
    setEditingCategory(null);
    if (activeCategory?.id === editingCategory.id) {
      setActiveCategory(editingCategory);
    }
  };

  const handleDeleteCategory = (id: string) => {
    if (!confirm("确定要删除此产品分类吗？分类下的所有产品也将被删除。")) return;
    const updated = categories.filter((c) => c.id !== id);
    setCategories(updated);
    saveProducts(updated);
    if (activeCategory?.id === id) setActiveCategory(null);
  };

  const startNewCategory = () => {
    setEditingCategory({
      id: "",
      title: "",
      slug: "",
      description: "",
      icon: "📦",
      color: "from-blue-500 to-indigo-600",
      bannerImage: "",
      brands: [],
      products: [],
      faqs: [],
      schemaDescription: "",
      published: true,
    });
  };

  // Product operations within a category
  const handleSaveProduct = () => {
    if (!editingProduct || !activeCategory) return;
    const updatedProducts = editingProduct.id
      ? activeCategory.products.map((p) => (p.id === editingProduct.id ? editingProduct : p))
      : [...activeCategory.products, { ...editingProduct, id: Date.now().toString() }];
    const updatedCategory = { ...activeCategory, products: updatedProducts };
    const updatedCategories = categories.map((c) => (c.id === activeCategory.id ? updatedCategory : c));
    setCategories(updatedCategories);
    saveProducts(updatedCategories);
    setActiveCategory(updatedCategory);
    setEditingProduct(null);
  };

  const handleDeleteProduct = (productId: string) => {
    if (!activeCategory) return;
    if (!confirm("确定要删除此产品吗？")) return;
    const updatedProducts = activeCategory.products.filter((p) => p.id !== productId);
    const updatedCategory = { ...activeCategory, products: updatedProducts };
    const updatedCategories = categories.map((c) => (c.id === activeCategory.id ? updatedCategory : c));
    setCategories(updatedCategories);
    saveProducts(updatedCategories);
    setActiveCategory(updatedCategory);
  };

  const startNewProduct = () => {
    if (!activeCategory) return;
    setEditingProduct({
      id: "",
      name: "",
      series: "",
      desc: "",
      features: [],
    });
  };

  // FAQ operations
  const handleSaveFaq = () => {
    if (!editingFaq || !activeCategory) return;
    const updatedFaqs = activeCategory.faqs.some((f) => f.q === editingFaq.q && f.a === editingFaq.a)
      ? activeCategory.faqs.map((f) => (f.q === editingFaq.q ? editingFaq : f))
      : [...activeCategory.faqs, editingFaq];
    const updatedCategory = { ...activeCategory, faqs: updatedFaqs };
    const updatedCategories = categories.map((c) => (c.id === activeCategory.id ? updatedCategory : c));
    setCategories(updatedCategories);
    saveProducts(updatedCategories);
    setActiveCategory(updatedCategory);
    setEditingFaq(null);
  };

  const handleDeleteFaq = (index: number) => {
    if (!activeCategory) return;
    const updatedFaqs = activeCategory.faqs.filter((_, i) => i !== index);
    const updatedCategory = { ...activeCategory, faqs: updatedFaqs };
    const updatedCategories = categories.map((c) => (c.id === activeCategory.id ? updatedCategory : c));
    setCategories(updatedCategories);
    saveProducts(updatedCategories);
    setActiveCategory(updatedCategory);
  };

  // Brand operations
  const handleAddBrand = () => {
    if (!newBrandInput.trim() || !activeCategory) return;
    if (activeCategory.brands.includes(newBrandInput.trim())) return;
    const updatedCategory = { ...activeCategory, brands: [...activeCategory.brands, newBrandInput.trim()] };
    const updatedCategories = categories.map((c) => (c.id === activeCategory.id ? updatedCategory : c));
    setCategories(updatedCategories);
    saveProducts(updatedCategories);
    setActiveCategory(updatedCategory);
    setNewBrandInput("");
  };

  const handleRemoveBrand = (brand: string) => {
    if (!activeCategory) return;
    const updatedCategory = { ...activeCategory, brands: activeCategory.brands.filter((b) => b !== brand) };
    const updatedCategories = categories.map((c) => (c.id === activeCategory.id ? updatedCategory : c));
    setCategories(updatedCategories);
    saveProducts(updatedCategories);
    setActiveCategory(updatedCategory);
  };

  // Generate code
  const handleGenerateCode = () => {
    if (!activeCategory) return;
    setGeneratedCode(generateCategoryPageCode(activeCategory));
    setShowCode(true);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Toggle publish
  const togglePublish = (categoryId: string) => {
    const updated = categories.map((c) =>
      c.id === categoryId ? { ...c, published: !c.published } : c
    );
    setCategories(updated);
    saveProducts(updated);
    if (activeCategory?.id === categoryId) {
      setActiveCategory(updated.find((c) => c.id === categoryId)!);
    }
  };

  return (
    <>
      <AdminSidebar />
      <div className="flex-1 flex flex-col min-h-screen">
        <AdminHeader />
        <main className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-bold text-dark">产品管理</h2>
                <p className="text-sm text-gray mt-1">管理产品分类、品牌、产品详情和 FAQ</p>
              </div>
              <button
                onClick={startNewCategory}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                新增分类
              </button>
            </div>

            {/* Category tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeCategory?.id === cat.id
                      ? "bg-primary text-white shadow-md"
                      : "bg-white border border-border text-dark hover:bg-slate-50"
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.title}</span>
                  <span className={`ml-1 px-1.5 py-0.5 rounded-full text-xs ${
                    cat.published ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"
                  }`}>
                    {cat.published ? "发布" : "草稿"}
                  </span>
                </button>
              ))}
            </div>

            {/* Selected category detail */}
            {activeCategory ? (
              <div className="space-y-6">
                {/* Category header card */}
                <div className="bg-white rounded-xl border border-border p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{activeCategory.icon}</span>
                      <div>
                        <h3 className="text-lg font-bold text-dark">{activeCategory.title}</h3>
                        <p className="text-xs text-gray">Slug: {activeCategory.slug}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => togglePublish(activeCategory.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                          activeCategory.published ? "bg-green-100 text-green-700 hover:bg-green-200" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        {activeCategory.published ? "已发布" : "草稿"}
                      </button>
                      <button
                        onClick={() => setEditingCategory(activeCategory)}
                        className="px-3 py-1.5 bg-primary-light text-primary rounded-lg text-xs font-medium hover:bg-primary hover:text-white transition-colors"
                      >
                        编辑分类
                      </button>
                      <button
                        onClick={handleGenerateCode}
                        className="px-3 py-1.5 bg-white border border-border text-dark rounded-lg text-xs font-medium hover:bg-slate-50 transition-colors"
                      >
                        生成代码
                      </button>
                      <button
                        onClick={() => handleDeleteCategory(activeCategory.id)}
                        className="px-3 py-1.5 bg-red-50 text-red-600 rounded-lg text-xs font-medium hover:bg-red-100 transition-colors"
                      >
                        删除分类
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-gray">{activeCategory.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {activeCategory.brands.map((b) => (
                      <span key={b} className="px-2 py-1 bg-slate-100 rounded text-xs text-dark font-medium">{b}</span>
                    ))}
                  </div>
                </div>

                {/* Brands section */}
                <div className="bg-white rounded-xl border border-border p-6">
                  <h4 className="text-sm font-semibold text-dark mb-3">品牌列表</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {activeCategory.brands.map((brand) => (
                      <div key={brand} className="flex items-center gap-1 px-3 py-1.5 bg-slate-50 border border-border rounded-lg">
                        <span className="text-sm text-dark">{brand}</span>
                        <button
                          onClick={() => handleRemoveBrand(brand)}
                          className="text-gray hover:text-red-500 transition-colors"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newBrandInput}
                      onChange={(e) => setNewBrandInput(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleAddBrand()}
                      className="flex-1 px-3 py-2 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="输入品牌名称，回车添加"
                    />
                    <button
                      onClick={handleAddBrand}
                      className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors"
                    >
                      添加品牌
                    </button>
                  </div>
                </div>

                {/* Products list */}
                <div className="bg-white rounded-xl border border-border p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-semibold text-dark">产品列表 ({activeCategory.products.length})</h4>
                    <button
                      onClick={startNewProduct}
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-primary text-white rounded-lg text-xs font-medium hover:bg-primary-dark transition-colors"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                      新增产品
                    </button>
                  </div>
                  {activeCategory.products.length === 0 ? (
                    <p className="text-sm text-gray text-center py-8">暂无产品，点击"新增产品"添加</p>
                  ) : (
                    <div className="space-y-3">
                      {activeCategory.products.map((product) => (
                        <div key={product.id} className="flex items-start gap-4 p-4 bg-slate-50 border border-border rounded-lg">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs font-bold bg-primary-light text-primary px-2 py-0.5 rounded">{product.series}</span>
                              <span className="text-sm font-semibold text-dark">{product.name}</span>
                            </div>
                            <p className="text-xs text-gray mb-2">{product.desc}</p>
                            <div className="flex flex-wrap gap-1">
                              {product.features.map((f) => (
                                <span key={f} className="px-2 py-0.5 bg-white border border-border rounded text-xs text-gray">{f}</span>
                              ))}
                            </div>
                          </div>
                          <div className="flex gap-1">
                            <button
                              onClick={() => setEditingProduct(product)}
                              className="p-2 text-primary hover:bg-primary-light rounded-lg transition-colors"
                              title="编辑"
                            >
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                            </button>
                            <button
                              onClick={() => handleDeleteProduct(product.id)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                              title="删除"
                            >
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* FAQ section */}
                <div className="bg-white rounded-xl border border-border p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-semibold text-dark">FAQ ({activeCategory.faqs.length})</h4>
                    <button
                      onClick={() => setEditingFaq({ q: "", a: "" })}
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-primary text-white rounded-lg text-xs font-medium hover:bg-primary-dark transition-colors"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                      新增 FAQ
                    </button>
                  </div>
                  {activeCategory.faqs.length === 0 ? (
                    <p className="text-sm text-gray text-center py-4">暂无 FAQ</p>
                  ) : (
                    <div className="space-y-3">
                      {activeCategory.faqs.map((faq, index) => (
                        <div key={index} className="p-4 bg-slate-50 border border-border rounded-lg">
                          <div className="flex items-start gap-4">
                            <div className="flex-1">
                              <p className="text-sm font-semibold text-dark mb-1">Q: {faq.q}</p>
                              <p className="text-xs text-gray">A: {faq.a}</p>
                            </div>
                            <div className="flex gap-1">
                              <button
                                onClick={() => setEditingFaq(faq)}
                                className="p-2 text-primary hover:bg-primary-light rounded-lg transition-colors"
                              >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                              </button>
                              <button
                                onClick={() => handleDeleteFaq(index)}
                                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                              >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl border border-border p-12 text-center">
                <p className="text-gray">请选择一个产品分类，或点击"新增分类"创建</p>
              </div>
            )}

            {/* Edit category modal */}
            {editingCategory && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                <div className="bg-white rounded-xl border border-border w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
                  <div className="p-6 border-b border-border">
                    <h3 className="text-lg font-bold text-dark">
                      {editingCategory.id ? "编辑分类" : "新增分类"}
                    </h3>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-dark mb-1.5">分类标题</label>
                        <input
                          type="text"
                          value={editingCategory.title}
                          onChange={(e) => setEditingCategory({ ...editingCategory, title: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                          placeholder="例如: Network Switches"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark mb-1.5">Slug (URL 路径)</label>
                        <input
                          type="text"
                          value={editingCategory.slug}
                          onChange={(e) => setEditingCategory({ ...editingCategory, slug: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                          placeholder="例如: switches 或 networking/switches"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark mb-1.5">描述</label>
                      <textarea
                        value={editingCategory.description}
                        onChange={(e) => setEditingCategory({ ...editingCategory, description: e.target.value })}
                        rows={3}
                        className="w-full px-4 py-2.5 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm resize-none"
                        placeholder="分类页面描述"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark mb-1.5">Schema 描述 (SEO)</label>
                      <textarea
                        value={editingCategory.schemaDescription}
                        onChange={(e) => setEditingCategory({ ...editingCategory, schemaDescription: e.target.value })}
                        rows={2}
                        className="w-full px-4 py-2.5 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm resize-none"
                        placeholder="搜索引擎结构化数据描述"
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-dark mb-1.5">图标</label>
                        <div className="flex flex-wrap gap-2 p-3 bg-slate-50 rounded-lg border border-border">
                          {ICON_OPTIONS.map((icon) => (
                            <button
                              key={icon}
                              onClick={() => setEditingCategory({ ...editingCategory, icon })}
                              className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                                editingCategory.icon === icon ? "bg-primary text-white" : "hover:bg-white"
                              }`}
                            >
                              {icon}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark mb-1.5">配色</label>
                        <div className="flex flex-col gap-2">
                          {COLOR_OPTIONS.map((opt) => (
                            <button
                              key={opt.value}
                              onClick={() => setEditingCategory({ ...editingCategory, color: opt.value })}
                              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                                editingCategory.color === opt.value
                                  ? "bg-primary-light border border-primary text-primary"
                                  : "bg-white border border-border text-dark hover:bg-slate-50"
                              }`}
                            >
                              <div className={`w-6 h-3 rounded bg-gradient-to-r ${opt.value}`} />
                              <span>{opt.label}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark mb-1.5">Banner 图片 URL</label>
                      <input
                        type="text"
                        value={editingCategory.bannerImage}
                        onChange={(e) => setEditingCategory({ ...editingCategory, bannerImage: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                        placeholder="https://images.unsplash.com/photo-xxx?w=1920&q=80"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="catPublished"
                        checked={editingCategory.published}
                        onChange={(e) => setEditingCategory({ ...editingCategory, published: e.target.checked })}
                        className="w-4 h-4 text-primary rounded border-gray-300 focus:ring-primary"
                      />
                      <label htmlFor="catPublished" className="text-sm text-dark">发布此分类</label>
                    </div>
                  </div>
                  <div className="p-6 border-t border-border flex justify-end gap-3">
                    <button
                      onClick={() => setEditingCategory(null)}
                      className="px-4 py-2 bg-white border border-border text-dark font-medium rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      取消
                    </button>
                    <button
                      onClick={handleSaveCategory}
                      className="px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
                    >
                      保存
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Edit product modal */}
            {editingProduct && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                <div className="bg-white rounded-xl border border-border w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
                  <div className="p-6 border-b border-border">
                    <h3 className="text-lg font-bold text-dark">
                      {editingProduct.id ? "编辑产品" : "新增产品"}
                    </h3>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-dark mb-1.5">产品名称</label>
                        <input
                          type="text"
                          value={editingProduct.name}
                          onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                          placeholder="例如: Cisco Catalyst 9300 Series"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark mb-1.5">品牌/系列</label>
                        <input
                          type="text"
                          value={editingProduct.series}
                          onChange={(e) => setEditingProduct({ ...editingProduct, series: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                          placeholder="例如: Cisco"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark mb-1.5">产品描述</label>
                      <textarea
                        value={editingProduct.desc}
                        onChange={(e) => setEditingProduct({ ...editingProduct, desc: e.target.value })}
                        rows={3}
                        className="w-full px-4 py-2.5 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm resize-none"
                        placeholder="产品特点描述"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark mb-1.5">特性标签</label>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {editingProduct.features.map((f, i) => (
                          <div key={i} className="flex items-center gap-1 px-3 py-1.5 bg-slate-50 border border-border rounded-lg">
                            <span className="text-xs text-dark">{f}</span>
                            <button
                              onClick={() => {
                                const updated = editingProduct.features.filter((_, fi) => fi !== i);
                                setEditingProduct({ ...editingProduct, features: updated });
                              }}
                              className="text-gray hover:text-red-500"
                            >
                              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={newFeatureInput}
                          onChange={(e) => setNewFeatureInput(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" && newFeatureInput.trim()) {
                              setEditingProduct({
                                ...editingProduct,
                                features: [...editingProduct.features, newFeatureInput.trim()],
                              });
                              setNewFeatureInput("");
                            }
                          }}
                          className="flex-1 px-3 py-2 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="输入特性，回车添加"
                        />
                        <button
                          onClick={() => {
                            if (newFeatureInput.trim()) {
                              setEditingProduct({
                                ...editingProduct,
                                features: [...editingProduct.features, newFeatureInput.trim()],
                              });
                              setNewFeatureInput("");
                            }
                          }}
                          className="px-4 py-2 bg-slate-100 text-dark rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors"
                        >
                          添加
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 border-t border-border flex justify-end gap-3">
                    <button
                      onClick={() => setEditingProduct(null)}
                      className="px-4 py-2 bg-white border border-border text-dark font-medium rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      取消
                    </button>
                    <button
                      onClick={handleSaveProduct}
                      className="px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
                    >
                      保存
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Edit FAQ modal */}
            {editingFaq && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                <div className="bg-white rounded-xl border border-border w-full max-w-2xl shadow-2xl">
                  <div className="p-6 border-b border-border">
                    <h3 className="text-lg font-bold text-dark">编辑 FAQ</h3>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-dark mb-1.5">问题 (Q)</label>
                      <input
                        type="text"
                        value={editingFaq.q}
                        onChange={(e) => setEditingFaq({ ...editingFaq, q: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                        placeholder="What is the difference between..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark mb-1.5">答案 (A)</label>
                      <textarea
                        value={editingFaq.a}
                        onChange={(e) => setEditingFaq({ ...editingFaq, a: e.target.value })}
                        rows={4}
                        className="w-full px-4 py-2.5 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm resize-none"
                        placeholder="回答内容"
                      />
                    </div>
                  </div>
                  <div className="p-6 border-t border-border flex justify-end gap-3">
                    <button
                      onClick={() => setEditingFaq(null)}
                      className="px-4 py-2 bg-white border border-border text-dark font-medium rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      取消
                    </button>
                    <button
                      onClick={handleSaveFaq}
                      className="px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
                    >
                      保存
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Generated code modal */}
            {showCode && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                <div className="bg-white rounded-xl border border-border w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl">
                  <div className="p-6 border-b border-border flex items-center justify-between">
                    <h3 className="text-lg font-bold text-dark">生成的产品页面代码</h3>
                    <button
                      onClick={() => setShowCode(false)}
                      className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                    >
                      <svg className="w-5 h-5 text-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-gray mb-3">
                      复制以下代码，用于创建或替换产品分类页面文件（例如
                      <code className="bg-slate-100 px-1 py-0.5 rounded text-xs">src/app/products/networking/switches/page.tsx</code>）：
                    </p>
                    <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-xs leading-relaxed">
                      <code>{generatedCode}</code>
                    </pre>
                    <div className="mt-4 flex gap-3">
                      <button
                        onClick={copyToClipboard}
                        className="px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
                      >
                        {copied ? "已复制" : "复制代码"}
                      </button>
                      <button
                        onClick={() => setShowCode(false)}
                        className="px-4 py-2 bg-white border border-border text-dark font-medium rounded-lg hover:bg-slate-50 transition-colors"
                      >
                        关闭
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
}
