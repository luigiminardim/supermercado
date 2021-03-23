export class Item {
  id: string
  name: string
  unity_type: "UNI" | "KG" | "BOX" | "GR" | "M2" | "M" | "ML" | "L"
  prices: {
    price: number
    promo_price?: number
  }[]
  shipping: {
    /** Kg */
    weight: number
    /** cm */
    lenght: number
    /** cm */
    height: number
    /** cm */
    width: number
  }
  images: string[]
  slug: string
  item_type: string
  custom_infos: any
  subcategory_ids: any
  //*** HTML format description. */
  description: string
  brand: string
  related_items: Item[]
  main_subcategory: {
    category_id: {
      title: string
    }
  }
}