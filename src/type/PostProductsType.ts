export interface Discount {
    type: string;
    value: number;
}

export interface Attribute {
    color: string;
    size: string;
}

// export interface City {
//     city_id: number;
//     city_name: string;
// }

export interface Image {
    name: string;
    url: string;
}

export interface ProductFormState {
    is_renting_support: boolean;
    is_selling_support: boolean;
    category_id: number | null;
    sub_category_id: number | null;
    address_id: number | null;
    title: string;
    description: string;
    item_price: number | null;
    tag_id: number | null;
    quantity: number | null;
    renting_mode: string;
    day_price: number | null;
    week_price: number | null;
    month_price: number | null;
    unit_price: number | null;
    delivery_fees: number | null;
    vendor_delivery_support: boolean;
    min_rental_days: number | null;
    min_rental_units: number | null;
    renting_unit_id: number | null;
    brand_id: number | null;
    rent_to_buy: boolean;
    subscription_id: number | null;
    discounts: Discount[];
    attributes: Attribute[];
    cities: string[];
    images: File[];
}
