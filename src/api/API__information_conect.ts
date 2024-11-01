import axios from "axios";

export const ApiUrlDev = "https://dev.yjoz.com/api/v5/";
export const ApiUrl = "https://api.yjoz.com/api/v6/";

export const endPoints = {
  get: {
    category: "get_available_categories",
    popularProducts: "get_popular_products",
    popularProductsByCategory: "get_popular_products_by_category",
    productDetails: "get_product_details/",
    filterProduct: "filter_product",
    prandGategory: "get_brands_by_category/{categoryid}",
    getCities: "get_cities",
    tags: "all_tags",
    getUserProfile: "get_user_profile",
    getAddrres: "get_address" ,
    Subscriptions:"get_subscriptions",
    payment : 'payment_methods',
    renting: "get_renting_units",
    getFevorite: "get_user_favorite?page=1",
    gitProdile: "get_profile/",
    settings : "settings"
  },
  post: {
    filter_product: "filter_product",
    login: "login",
    signup: "signup",
    otp_verify: "otp_verify",
    editProfile: "edit_user_profile",
    AddFavorite : "add_to_favorite",
    removeFavorite : "remove_from_favorite",
    addAdrress : "add_address",
    userProducts: "user_products",
    deletedAddress: "delete_address",
    addProducts: "add_product"
  },
};

export const axiosClaint = axios.create({
  baseURL: `${ApiUrlDev}`,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const LongStaleTime = 10000000000;

export const validToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5Yjg5ODkwZi1lOWJjLTRlMzQtOTAxYS1kZjM1MjMzNTAxMmYiLCJqdGkiOiI5NmI3NzZkMDc3Nzk4NzhhNDg3ZTExOTAyYTEwNmVjZTQ2M2M5MWIzNjlmZTM0ODZkNTcwM2U2NmU3M2Y2OWI5NWE3MWU4ZDkzOTg1OTM5MiIsImlhdCI6MTcyOTExMzYyNi45NTE2MzQ4ODM4ODA2MTUyMzQzNzUsIm5iZiI6MTcyOTExMzYyNi45NTE2MzYwNzU5NzM1MTA3NDIxODc1LCJleHAiOjE3NjA2NDk2MjYuOTQ2NDgyODk2ODA0ODA5NTcwMzEyNSwic3ViIjoiZDFjYWVkMDMtOTE0MS00NDQ1LTgxMDgtMTdmNTVlYjIwM2E5Iiwic2NvcGVzIjpbXX0.FesKyyqGcxdlV_qnyKV03bySdA2xWUWvdOWzPEQ04sSBemnNl4KJq-swc-QRU-ogHIzFzWafRzEZ1_66LKTLnFiTd3LV9m4Xqj9_qS5iMDx6LyPReqaIcK6VqWOLLmZ2d9exl97hk1vHnGQUTKLFhr1cr00BKy15mbQaHUuM0szcBfDj3cQRPFvkn7XLruGk1rcJAG1jwPlVE0DT14DPzJ4MJQZuWGNHa6g0Ewt6SHNSGe2sSLlrbRc4nhIvHUed60TmbA37SU2234YekK-xnDJX_nzYWwRma8tD0tHhxALThIspLC2F8Kdht26jkuzzfEpcxnT7eI_OflWznT8t885pxkvJZ9Ku4F69foSHyMSA5yQT0FuQ0aS1skNsWnzRflzE5O6zeu0ubuvgClNvEUiW2FmfFDMSo3TV0f2224_4sov90Mn8wxOBbWqevAnkqe8HsdcCh7-Bp0r2XOOeVBqy2Se1eXWP8GouxbYtZIJa0HzXB6UVyDtE7ZAz2MZ_KfFbjYTS26YHO0nDs8itOwE4VFFqegPR-9hzDnvwqTGSJFKeVk4Pn3PtBgTOvcIbh8gmN6jwjGFA8Vn86JkngYDskuAYuxUlziR39WkiOv85cBoFcm_kuz8jriLAO_h0JbGB0GDtkObmBolA5UD1PTO8Lhvr98SDZ_kG0IIDPAE";
