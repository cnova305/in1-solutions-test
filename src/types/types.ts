export interface Voucher {
    id?: number;
    name?: string;
    description?: string;
    hotelName?: string;
    price?: number;
    // discountedPrice?: string;
    voucherImageUrl?: string;
    voucherUrl?: string;
    currency?: string;
    displayPrice?: string;
    variants: variant[];
}

export interface variant {
    id: number;
    name?: string;
    price?: string;
}