/**
 * PRODUCT DATA FILE
 * ==================
 * To add, edit, or remove products, edit this file only.
 * No need to touch any component or page files.
 *
 * HOW TO ADD A PRODUCT:
 *   1. Copy an existing product object
 *   2. Change the id, name, category, description, specs, and image
 *   3. Save the file — the Products page updates automatically
 *
 * HOW TO ADD A CATEGORY:
 *   1. Add a new string to the PRODUCT_CATEGORIES array
 *   2. Use that string as the `category` value in your product
 *
 * IMAGE TIPS:
 *   - Place images in /public/assets/images/products/
 *   - Reference them as: image: '/assets/images/products/your-image.jpg'
 *   - Or use an external URL
 */

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  image: string;
  imageAlt: string;
  specs: ProductSpec[];
  featured?: boolean;
}

// ─── CATEGORIES ────────────────────────────────────────────────────────────────
// Add new categories here. They will appear as filter tabs on the Products page.
export const PRODUCT_CATEGORIES = [
'All',
'Industrial & Manufacturing',
'Healthcare & Wellness',
'Food & Packaging',
'Automotive Parts',
'Hospitality & Consumer Products'] as
const;

// ─── PRODUCTS ──────────────────────────────────────────────────────────────────
export const products: Product[] = [
{
  id: 'industrial-parts-001',
  name: 'Industrial Plastic Components',
  category: 'Industrial & Manufacturing',
  shortDescription: 'High-precision plastic parts for machinery and industrial manufacturing applications.',
  description:
  'SWP manufactures precision plastic components for industrial machinery and manufacturing equipment. Our injection molding capabilities (80–650 ton machines) deliver consistent, high-quality parts that meet demanding industrial specifications. Custom mold development and OEM production available.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f63b6052-1772055150731.png",
  imageAlt: 'Industrial plastic components and structural parts manufactured by injection molding for machinery and manufacturing equipment',
  specs: [
  { label: 'Machine Range', value: '80–650 Ton' },
  { label: 'Process', value: 'Injection Molding / Insert Molding' },
  { label: 'Certification', value: 'ISO 9001, ISO 14001' },
  { label: 'Production', value: 'OEM / Custom Order' }],

  featured: true
},
{
  id: 'healthcare-parts-001',
  name: 'Healthcare & Wellness Parts',
  category: 'Healthcare & Wellness',
  shortDescription: 'Plastic components for wellness equipment and healthcare sector applications.',
  description:
  'SWP produces plastic parts for the healthcare and wellness industry, including equipment housings, functional components, and specialty parts. Our quality management system (ISO 9001) and strict process controls ensure consistent, reliable products that meet healthcare sector requirements.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1cb7a4a56-1772130895372.png",
  imageAlt: 'Precision plastic healthcare components and wellness equipment parts manufactured with strict quality control',
  specs: [
  { label: 'Quality System', value: 'ISO 9001 Certified' },
  { label: 'Process', value: 'Precision Injection Molding' },
  { label: 'Surface Finish', value: 'Custom per requirement' },
  { label: 'Production', value: 'OEM / Custom Order' }],

  featured: true
},
{
  id: 'food-packaging-001',
  name: 'Food & Packaging Solutions',
  category: 'Food & Packaging',
  shortDescription: 'Plastic packaging components for food products and consumer goods.',
  description:
  'SWP manufactures plastic packaging components for the food and consumer goods industry. Our value-added services include assembly, printing, and decoration to deliver complete packaging solutions. Environmental responsibility is embedded in our ISO 14001 certified operations.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f86f65c9-1786587575614.png",
  imageAlt: 'Plastic food packaging components and consumer goods containers manufactured by SWP injection molding',
  specs: [
  { label: 'Environmental', value: 'ISO 14001 Certified' },
  { label: 'Services', value: 'Assembly, Printing, Decoration' },
  { label: 'Material', value: 'Food-grade options available' },
  { label: 'Production', value: 'OEM / Custom Order' }],

  featured: false
},
{
  id: 'automotive-parts-001',
  name: 'Automotive Plastic Parts',
  category: 'Automotive Parts',
  shortDescription: 'Precision plastic components for the automotive industry.',
  description:
  'SWP supplies precision plastic components for the automotive industry, including interior trim, connector housings, and structural parts. Our high-precision injection molding (±0.05 mm tolerance), multi-shot and insert molding capabilities, and rigorous quality assurance ensure parts meet automotive standards.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c6037d10-1767168337759.png",
  imageAlt: 'Automotive plastic parts including interior trim panels and connector housings manufactured by SWP precision injection molding',
  specs: [
  { label: 'Tolerance', value: '±0.05 mm' },
  { label: 'Process', value: 'Multi-shot & Insert Molding' },
  { label: 'Quality', value: 'Strict QC / Advanced Measuring' },
  { label: 'Production', value: 'OEM / Custom Order' }],

  featured: true
},
{
  id: 'hospitality-consumer-001',
  name: 'Hospitality & Consumer Products',
  category: 'Hospitality & Consumer Products',
  shortDescription: 'Plastic goods for hotels, restaurants, and general consumer use.',
  description:
  'SWP manufactures plastic products for the hospitality sector and general consumer market, including hotel amenity items, restaurant supplies, and everyday consumer goods. Our value-added services — assembly, packaging, printing, and decoration — enable complete product delivery from mold to finished goods.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_137294660-1786587575602.png",
  imageAlt: 'Plastic consumer products and hospitality items including hotel amenities and restaurant supplies manufactured by SWP',
  specs: [
  { label: 'Services', value: 'Assembly, Packaging, Printing' },
  { label: 'Finish', value: 'Custom colors & surface options' },
  { label: 'Ethics', value: 'SMETA Certified' },
  { label: 'Production', value: 'OEM / Custom Order' }],

  featured: false
}];