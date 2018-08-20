// Angular
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

// RXJS
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    // productUrl ="https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json";

    constructor(private http: HttpClient) { }

    getProducts(): Observable<any> {
        // const headers = new HttpHeaders()
        // .set('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept')
        // .set('Access-Control-Allow-Methods', '*')
        // .set('Access-Control-Allow-Origin','http://localhost:4200/')

        // let headers = new HttpHeaders({'Content-Type':'application/JSON'});
        // return this.http.get<any>(this.productUrl,{ headers });

        // ***Since not able to acces the product url, hardcoding the Json ***//
        var products = {
            "id": "shop/new/all-new",
            "name": "All New",
            "categoryType": "subcat",
            "groups": [
                {
                    "id": "400-thread-count-organic-sateen-watercolor-ribbon-duvet-b2507",
                    "name": "400-Thread-Count Organic Sateen Watercolor Scribble Duvet Cover + Shams",
                    "links": {
                        "www": "https://www.westelm.com/products/400-thread-count-organic-sateen-watercolor-ribbon-duvet-b2507/"
                    },
                    "priceRange": {
                        "regular": {
                            "high": 129,
                            "low": 29
                        },
                        "selling": {
                            "high": 119,
                            "low": 23
                        },
                        "type": "special"
                    },
                    "thumbnail": {
                        "size": "m",
                        "meta": "",
                        "alt": "",
                        "rel": "thumbnail",
                        "width": 363,
                        "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201828/0009/400-thread-count-organic-sateen-watercolor-ribbon-duvet-co-1-m.jpg",
                        "height": 363
                    },
                    "hero": {
                        "size": "m",
                        "meta": "",
                        "alt": "",
                        "rel": "hero",
                        "width": 363,
                        "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201828/0009/400-thread-count-organic-sateen-watercolor-ribbon-duvet-co-1-m.jpg",
                        "height": 363
                    },
                    "images": [
                        {
                            "size": "m",
                            "meta": "",
                            "alt": "",
                            "rel": "althero",
                            "width": 363,
                            "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201828/0009/400-thread-count-organic-sateen-watercolor-ribbon-duvet-co-2-m.jpg",
                            "height": 363
                        },
                        {
                            "size": "m",
                            "meta": "",
                            "alt": "",
                            "rel": "althero",
                            "width": 363,
                            "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201828/0009/400-thread-count-organic-sateen-watercolor-ribbon-duvet-co-m.jpg",
                            "height": 363
                        },
                        {
                            "size": "m",
                            "meta": "",
                            "alt": "",
                            "rel": "althero",
                            "width": 363,
                            "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201825/0001/pop-art-jacquard-pillow-covers-1-m.jpg",
                            "height": 363
                        }
                    ],
                    "swatches": [],
                    "messages": [],
                    "flags": [
                        {
                            "bopisSuppress": false,
                            "rank": 3,
                            "id": "newcore"
                        },
                        {
                            "bopisSuppress": false,
                            "rank": 7,
                            "id": "organic"
                        },
                        {
                            "bopisSuppress": false,
                            "rank": 9,
                            "id": "fairTrade"
                        }
                    ],
                    "reviews": {
                        "recommendationCount": 0,
                        "likelihood": 0,
                        "reviewCount": 0,
                        "averageRating": 0,
                        "id": "400-thread-count-organic-sateen-watercolor-ribbon-duvet-b2507",
                        "type": "GROUP_REVIEWS"
                    }
                },
                {
                    "id": "washed-melange-jacquard-duvet-cover-shams-b2483",
                    "name": "Washed Melange Jacquard Duvet Cover + Shams",
                    "links": {
                        "www": "https://www.westelm.com/products/washed-melange-jacquard-duvet-cover-shams-b2483/"
                    },
                    "priceRange": {
                        "regular": {
                            "high": 179,
                            "low": 34
                        },
                        "selling": {
                            "high": 143,
                            "low": 27
                        },
                        "type": "special"
                    },
                    "thumbnail": {
                        "size": "m",
                        "meta": "",
                        "alt": "",
                        "rel": "thumbnail",
                        "width": 363,
                        "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201825/0002/washed-melange-duvet-cover-shams-m.jpg",
                        "height": 363
                    },
                    "hero": {
                        "size": "m",
                        "meta": "",
                        "alt": "",
                        "rel": "hero",
                        "width": 363,
                        "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201825/0002/washed-melange-duvet-cover-shams-m.jpg",
                        "height": 363
                    },
                    "images": [
                        {
                            "size": "m",
                            "meta": "",
                            "alt": "",
                            "rel": "althero",
                            "width": 363,
                            "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201825/0001/washed-melange-duvet-cover-shams-1-m.jpg",
                            "height": 363
                        },
                        {
                            "size": "m",
                            "meta": "",
                            "alt": "",
                            "rel": "althero",
                            "width": 363,
                            "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201825/0002/washed-melange-duvet-cover-shams-1-m.jpg",
                            "height": 363
                        },
                        {
                            "size": "m",
                            "meta": "",
                            "alt": "",
                            "rel": "althero",
                            "width": 363,
                            "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201825/0001/heathered-sateen-quilt-shams-m.jpg",
                            "height": 363
                        }
                    ],
                    "swatches": [],
                    "messages": [],
                    "flags": [
                        {
                            "bopisSuppress": false,
                            "rank": 3,
                            "id": "newcore"
                        },
                        {
                            "bopisSuppress": false,
                            "rank": 7,
                            "id": "organic"
                        },
                        {
                            "bopisSuppress": false,
                            "rank": 9,
                            "id": "fairTrade"
                        }
                    ],
                    "reviews": {
                        "recommendationCount": 0,
                        "likelihood": 0,
                        "reviewCount": 0,
                        "averageRating": 0,
                        "id": "washed-melange-jacquard-duvet-cover-shams-b2483",
                        "type": "GROUP_REVIEWS"
                    }
                },
                {
                    "id": "organic-washed-cotton-windowpane-duvet-cover-shams-b2453",
                    "name": "Organic Washed Cotton Windowpane Duvet Cover + Shams",
                    "links": {
                        "www": "https://www.westelm.com/products/organic-washed-cotton-windowpane-duvet-cover-shams-b2453/"
                    },
                    "priceRange": {
                        "regular": {
                            "high": 159,
                            "low": 34
                        },
                        "selling": {
                            "high": 127,
                            "low": 27
                        },
                        "type": "special"
                    },
                    "thumbnail": {
                        "size": "m",
                        "meta": "",
                        "alt": "",
                        "rel": "thumbnail",
                        "width": 363,
                        "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201825/0001/organic-washed-cotton-windowpane-duvet-cover-shams-2-m.jpg",
                        "height": 363
                    },
                    "hero": {
                        "size": "m",
                        "meta": "",
                        "alt": "",
                        "rel": "hero",
                        "width": 363,
                        "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201825/0001/organic-washed-cotton-windowpane-duvet-cover-shams-2-m.jpg",
                        "height": 363
                    },
                    "images": [
                        {
                            "size": "m",
                            "meta": "",
                            "alt": "",
                            "rel": "althero",
                            "width": 363,
                            "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201825/0002/organic-washed-cotton-windowpane-duvet-cover-shams-m.jpg",
                            "height": 363
                        },
                        {
                            "size": "m",
                            "meta": "",
                            "alt": "",
                            "rel": "althero",
                            "width": 363,
                            "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201825/0009/organic-washed-cotton-windowpane-duvet-cover-shams-white-m-m.jpg",
                            "height": 363
                        },
                        {
                            "size": "m",
                            "meta": "",
                            "alt": "",
                            "rel": "althero",
                            "width": 363,
                            "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201825/0009/organic-washed-cotton-windowpane-duvet-cover-shams-1-m.jpg",
                            "height": 363
                        },
                        {
                            "size": "m",
                            "meta": "",
                            "alt": "",
                            "rel": "althero",
                            "width": 363,
                            "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201826/0021/organic-washed-cotton-windowpane-duvet-cover-shams-m.jpg",
                            "height": 363
                        },
                        {
                            "size": "m",
                            "meta": "",
                            "alt": "",
                            "rel": "althero",
                            "width": 363,
                            "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201825/0001/organic-washed-cotton-windowpane-duvet-cover-shams-m.jpg",
                            "height": 363
                        },
                        {
                            "size": "m",
                            "meta": "",
                            "alt": "",
                            "rel": "althero",
                            "width": 363,
                            "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201825/0001/organic-washed-cotton-windowpane-duvet-cover-shams-1-m.jpg",
                            "height": 363
                        },
                        {
                            "size": "m",
                            "meta": "",
                            "alt": "",
                            "rel": "althero",
                            "width": 363,
                            "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201825/0009/organic-washed-cotton-windowpane-duvet-cover-shams-m.jpg",
                            "height": 363
                        }
                    ],
                    "swatches": [],
                    "messages": [],
                    "flags": [
                        {
                            "bopisSuppress": false,
                            "rank": 3,
                            "id": "newcore"
                        },
                        {
                            "bopisSuppress": false,
                            "rank": 7,
                            "id": "organic"
                        }
                    ],
                    "reviews": {
                        "recommendationCount": 0,
                        "likelihood": 0,
                        "reviewCount": 0,
                        "averageRating": 0,
                        "id": "organic-washed-cotton-windowpane-duvet-cover-shams-b2453",
                        "type": "GROUP_REVIEWS"
                    }
                },
                {
                    "id": "belgian-linen-contrast-stripe-duvet-cover-shams-b2477",
                    "name": "Belgian Linen Contrast Stripe Duvet Cover + Shams",
                    "links": {
                        "www": "https://www.westelm.com/products/belgian-linen-contrast-stripe-duvet-cover-shams-b2477/"
                    },
                    "priceRange": {
                        "regular": {
                            "high": 249,
                            "low": 44
                        },
                        "selling": {
                            "high": 199,
                            "low": 35
                        },
                        "type": "special"
                    },
                    "thumbnail": {
                        "size": "m",
                        "meta": "",
                        "alt": "",
                        "rel": "thumbnail",
                        "width": 363,
                        "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201830/0018/belgian-linen-contrast-stripe-duvet-cover-shams-1-m.jpg",
                        "height": 363
                    },
                    "hero": {
                        "size": "m",
                        "meta": "",
                        "alt": "",
                        "rel": "hero",
                        "width": 363,
                        "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201830/0018/belgian-linen-contrast-stripe-duvet-cover-shams-1-m.jpg",
                        "height": 363
                    },
                    "images": [
                        {
                            "size": "m",
                            "meta": "",
                            "alt": "",
                            "rel": "althero",
                            "width": 363,
                            "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201830/0018/belgian-linen-contrast-stripe-duvet-cover-shams-m.jpg",
                            "height": 363
                        },
                        {
                            "size": "m",
                            "meta": "",
                            "alt": "",
                            "rel": "althero",
                            "width": 363,
                            "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201829/0016/audrey-nightstand-mist-gray-m.jpg",
                            "height": 363
                        }
                    ],
                    "swatches": [],
                    "messages": [],
                    "flags": [
                        {
                            "bopisSuppress": false,
                            "rank": 3,
                            "id": "newcore"
                        },
                        {
                            "bopisSuppress": false,
                            "rank": 9,
                            "id": "fairTrade"
                        }
                    ],
                    "reviews": {
                        "recommendationCount": 0,
                        "likelihood": 0,
                        "reviewCount": 0,
                        "averageRating": 0,
                        "id": "belgian-linen-contrast-stripe-duvet-cover-shams-b2477",
                        "type": "GROUP_REVIEWS"
                    }
                },
                {
                    "id": "tencel-duvet-shams-b2087",
                    "name": "TENCEL&trade; Duvet Cover + Shams",
                    "links": {
                        "www": "https://www.westelm.com/products/tencel-duvet-shams-b2087/"
                    },
                    "priceRange": {
                        "regular": {
                            "high": 129,
                            "low": 29
                        },
                        "selling": {
                            "high": 103,
                            "low": 23
                        },
                        "type": "special"
                    },
                    "thumbnail": {
                        "size": "m",
                        "meta": "",
                        "alt": "",
                        "rel": "thumbnail",
                        "width": 363,
                        "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201824/0075/tencel-duvet-cover-shams-m.jpg",
                        "height": 363
                    },
                    "hero": {
                        "size": "m",
                        "meta": "",
                        "alt": "",
                        "rel": "hero",
                        "width": 363,
                        "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201824/0075/tencel-duvet-cover-shams-m.jpg",
                        "height": 363
                    },
                    "images": [
                        {
                            "size": "m",
                            "meta": "",
                            "alt": "",
                            "rel": "althero",
                            "width": 363,
                            "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201824/0162/tencel-duvet-cover-shams-blue-teal-m.jpg",
                            "height": 363
                        },
                        {
                            "size": "m",
                            "meta": "",
                            "alt": "",
                            "rel": "althero",
                            "width": 363,
                            "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201832/0006/tencel-duvet-cover-shams-1-m.jpg",
                            "height": 363
                        },
                        {
                            "size": "m",
                            "meta": "",
                            "alt": "",
                            "rel": "althero",
                            "width": 363,
                            "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201825/0013/tencel-duvet-cover-shams-blue-teal-m.jpg",
                            "height": 363
                        },
                        {
                            "size": "m",
                            "meta": "",
                            "alt": "",
                            "rel": "althero",
                            "width": 363,
                            "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201832/0006/tencel-duvet-cover-shams-m.jpg",
                            "height": 363
                        },
                        {
                            "size": "m",
                            "meta": "",
                            "alt": "",
                            "rel": "althero",
                            "width": 363,
                            "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201825/0001/tencel-duvet-cover-shams-m.jpg",
                            "height": 363
                        },
                        {
                            "size": "m",
                            "meta": "",
                            "alt": "",
                            "rel": "althero",
                            "width": 363,
                            "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201827/0009/tencel-duvet-cover-shams-pink-grapefruit-m.jpg",
                            "height": 363
                        },
                        {
                            "size": "m",
                            "meta": "",
                            "alt": "",
                            "rel": "althero",
                            "width": 363,
                            "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201827/0009/tencel-duvet-cover-shams-m.jpg",
                            "height": 363
                        },
                        {
                            "size": "m",
                            "meta": "",
                            "alt": "",
                            "rel": "althero",
                            "width": 363,
                            "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201824/0237/tencel-duvet-cover-shams-m.jpg",
                            "height": 363
                        },
                        {
                            "size": "m",
                            "meta": "",
                            "alt": "",
                            "rel": "althero",
                            "width": 363,
                            "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201824/0110/tencel-bedding-set-platinum-m.jpg",
                            "height": 363
                        },
                        {
                            "size": "m",
                            "meta": "",
                            "alt": "",
                            "rel": "althero",
                            "width": 363,
                            "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201824/0114/tencel-bedding-set-stone-white-m.jpg",
                            "height": 363
                        },
                        {
                            "size": "m",
                            "meta": "",
                            "alt": "",
                            "rel": "althero",
                            "width": 363,
                            "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201824/0035/tencel-bedding-set-stone-white-m.jpg",
                            "height": 363
                        },
                        {
                            "size": "m",
                            "meta": "",
                            "alt": "",
                            "rel": "althero",
                            "width": 363,
                            "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201824/0178/tencel-duvet-cover-shams-m.jpg",
                            "height": 363
                        },
                        {
                            "size": "m",
                            "meta": "",
                            "alt": "",
                            "rel": "althero",
                            "width": 363,
                            "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201824/0042/tencel-duvet-cover-shams-pink-blush-m.jpg",
                            "height": 363
                        },
                        {
                            "size": "m",
                            "meta": "",
                            "alt": "",
                            "rel": "althero",
                            "width": 363,
                            "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201825/0009/tencel-duvet-cover-shams-m.jpg",
                            "height": 363
                        },
                        {
                            "size": "m",
                            "meta": "",
                            "alt": "",
                            "rel": "althero",
                            "width": 363,
                            "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201824/0220/tencel-duvet-cover-shams-m.jpg",
                            "height": 363
                        },
                        {
                            "size": "m",
                            "meta": "",
                            "alt": "",
                            "rel": "althero",
                            "width": 363,
                            "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201824/0156/tencel-duvet-cover-shams-midnight-m.jpg",
                            "height": 363
                        }
                    ],
                    "swatches": [],
                    "messages": [],
                    "flags": [
                        {
                            "bopisSuppress": false,
                            "rank": 8,
                            "id": "handmade"
                        },
                        {
                            "bopisSuppress": false,
                            "rank": 9,
                            "id": "fairTrade"
                        },
                        {
                            "bopisSuppress": false,
                            "rank": 11,
                            "id": "new_colors"
                        }
                    ],
                    "reviews": {
                        "recommendationCount": 0,
                        "likelihood": 0,
                        "reviewCount": 0,
                        "averageRating": 0,
                        "id": "tencel-duvet-shams-b2087",
                        "type": "GROUP_REVIEWS"
                    }
                },
                {
                    "id": "organic-concentric-squares-jacquard-duvet-cover-shams-b2480",
                    "name": "Organic Concentric Squares Jacquard Duvet Cover + Shams",
                    "links": {
                        "www": "https://www.westelm.com/products/organic-concentric-squares-jacquard-duvet-cover-shams-b2480/"
                    },
                    "priceRange": {
                        "regular": {
                            "high": 179,
                            "low": 34
                        },
                        "selling": {
                            "high": 143,
                            "low": 27
                        },
                        "type": "special"
                    },
                    "thumbnail": {
                        "size": "m",
                        "meta": "",
                        "alt": "",
                        "rel": "thumbnail",
                        "width": 363,
                        "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201825/0001/organic-concentric-squares-jacquard-duvet-cover-shams-3-m.jpg",
                        "height": 363
                    },
                    "hero": {
                        "size": "m",
                        "meta": "",
                        "alt": "",
                        "rel": "hero",
                        "width": 363,
                        "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201825/0001/organic-concentric-squares-jacquard-duvet-cover-shams-3-m.jpg",
                        "height": 363
                    },
                    "images": [
                        {
                            "size": "m",
                            "meta": "",
                            "alt": "",
                            "rel": "althero",
                            "width": 363,
                            "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201825/0001/organic-concentric-squares-jacquard-duvet-cover-shams-2-m.jpg",
                            "height": 363
                        },
                        {
                            "size": "m",
                            "meta": "",
                            "alt": "",
                            "rel": "althero",
                            "width": 363,
                            "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201830/0023/organic-concentric-squares-jacquard-duvet-cover-shams-plat-m.jpg",
                            "height": 363
                        },
                        {
                            "size": "m",
                            "meta": "",
                            "alt": "",
                            "rel": "althero",
                            "width": 363,
                            "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201825/0002/organic-concentric-squares-jacquard-duvet-cover-shams-m.jpg",
                            "height": 363
                        },
                        {
                            "size": "m",
                            "meta": "",
                            "alt": "",
                            "rel": "althero",
                            "width": 363,
                            "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201825/0001/diagonal-stripe-velvet-pillow-covers-2-m.jpg",
                            "height": 363
                        },
                        {
                            "size": "m",
                            "meta": "",
                            "alt": "",
                            "rel": "althero",
                            "width": 363,
                            "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201825/0009/organic-concentric-squares-jacquard-duvet-cover-shams-m.jpg",
                            "height": 363
                        },
                        {
                            "size": "m",
                            "meta": "",
                            "alt": "",
                            "rel": "althero",
                            "width": 363,
                            "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201825/0009/organic-concentric-squares-jacquard-duvet-cover-shams-1-m.jpg",
                            "height": 363
                        }
                    ],
                    "swatches": [],
                    "messages": [],
                    "flags": [
                        {
                            "bopisSuppress": false,
                            "rank": 3,
                            "id": "newcore"
                        },
                        {
                            "bopisSuppress": false,
                            "rank": 7,
                            "id": "organic"
                        },
                        {
                            "bopisSuppress": false,
                            "rank": 9,
                            "id": "fairTrade"
                        }
                    ],
                    "reviews": {
                        "recommendationCount": 0,
                        "likelihood": 0,
                        "reviewCount": 0,
                        "averageRating": 0,
                        "id": "organic-concentric-squares-jacquard-duvet-cover-shams-b2480",
                        "type": "GROUP_REVIEWS"
                    }
                },
                {
                    "id": "organic-ikat-stripe-duvet-cover-shams-b2478",
                    "name": "Organic Ikat Stripe Duvet Cover + Shams",
                    "links": {
                        "www": "https://www.westelm.com/products/organic-ikat-stripe-duvet-cover-shams-b2478/"
                    },
                    "priceRange": {
                        "regular": {
                            "high": 179,
                            "low": 34
                        },
                        "selling": {
                            "high": 143,
                            "low": 27
                        },
                        "type": "special"
                    },
                    "thumbnail": {
                        "size": "m",
                        "meta": "",
                        "alt": "",
                        "rel": "thumbnail",
                        "width": 363,
                        "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201825/0002/organic-ikat-stripe-duvet-cover-shams-m.jpg",
                        "height": 363
                    },
                    "hero": {
                        "size": "m",
                        "meta": "",
                        "alt": "",
                        "rel": "hero",
                        "width": 363,
                        "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201825/0002/organic-ikat-stripe-duvet-cover-shams-m.jpg",
                        "height": 363
                    },
                    "images": [
                        {
                            "size": "m",
                            "meta": "",
                            "alt": "",
                            "rel": "althero",
                            "width": 363,
                            "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201825/0001/organic-ikat-stripe-duvet-cover-shams-m.jpg",
                            "height": 363
                        },
                        {
                            "size": "m",
                            "meta": "",
                            "alt": "",
                            "rel": "althero",
                            "width": 363,
                            "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201825/0001/desert-tassels-pillow-cover-m.jpg",
                            "height": 363
                        },
                        {
                            "size": "m",
                            "meta": "",
                            "alt": "",
                            "rel": "althero",
                            "width": 363,
                            "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201827/0009/organic-ikat-stripe-duvet-cover-shams-m.jpg",
                            "height": 363
                        }
                    ],
                    "swatches": [],
                    "messages": [],
                    "flags": [
                        {
                            "bopisSuppress": false,
                            "rank": 3,
                            "id": "newcore"
                        },
                        {
                            "bopisSuppress": false,
                            "rank": 7,
                            "id": "organic"
                        }
                    ],
                    "reviews": {
                        "recommendationCount": 0,
                        "likelihood": 0,
                        "reviewCount": 0,
                        "averageRating": 0,
                        "id": "organic-ikat-stripe-duvet-cover-shams-b2478",
                        "type": "GROUP_REVIEWS"
                    }
                },
                {
                    "id": "organic-alternating-geo-jacquard-duvet-cover-shams-b2479",
                    "name": "Organic Alternating Geo Jacquard Duvet Cover + Shams",
                    "links": {
                        "www": "https://www.westelm.com/products/organic-alternating-geo-jacquard-duvet-cover-shams-b2479/"
                    },
                    "priceRange": {
                        "regular": {
                            "high": 179,
                            "low": 34
                        },
                        "selling": {
                            "high": 143,
                            "low": 27
                        },
                        "type": "special"
                    },
                    "thumbnail": {
                        "size": "m",
                        "meta": "",
                        "alt": "",
                        "rel": "thumbnail",
                        "width": 363,
                        "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201825/0002/organic-alternating-geo-jacquard-duvet-cover-shams-1-m.jpg",
                        "height": 363
                    },
                    "hero": {
                        "size": "m",
                        "meta": "",
                        "alt": "",
                        "rel": "hero",
                        "width": 363,
                        "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201825/0002/organic-alternating-geo-jacquard-duvet-cover-shams-1-m.jpg",
                        "height": 363
                    },
                    "images": [
                        {
                            "size": "m",
                            "meta": "",
                            "alt": "",
                            "rel": "althero",
                            "width": 363,
                            "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201825/0002/organic-alternating-geo-jacquard-duvet-cover-shams-m.jpg",
                            "height": 363
                        }
                    ],
                    "swatches": [],
                    "messages": [],
                    "flags": [
                        {
                            "bopisSuppress": false,
                            "rank": 3,
                            "id": "newcore"
                        },
                        {
                            "bopisSuppress": false,
                            "rank": 7,
                            "id": "organic"
                        },
                        {
                            "bopisSuppress": false,
                            "rank": 9,
                            "id": "fairTrade"
                        }
                    ],
                    "reviews": {
                        "recommendationCount": 0,
                        "likelihood": 0,
                        "reviewCount": 0,
                        "averageRating": 0,
                        "id": "organic-alternating-geo-jacquard-duvet-cover-shams-b2479",
                        "type": "GROUP_REVIEWS"
                    }
                },
                {
                    "id": "belgian-flax-linen-space-dyed-duvet-cover-shams-b2506",
                    "name": "Belgian Flax Linen Space Dyed Duvet Cover + Shams",
                    "links": {
                        "www": "https://www.westelm.com/products/belgian-flax-linen-space-dyed-duvet-cover-shams-b2506/"
                    },
                    "priceRange": {
                        "regular": {
                            "high": 249,
                            "low": 44
                        },
                        "selling": {
                            "high": 199,
                            "low": 35
                        },
                        "type": "special"
                    },
                    "thumbnail": {
                        "size": "m",
                        "meta": "",
                        "alt": "",
                        "rel": "thumbnail",
                        "width": 363,
                        "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201830/0018/belgian-flax-linen-space-dyed-duvet-cover-shams-m.jpg",
                        "height": 363
                    },
                    "hero": {
                        "size": "m",
                        "meta": "",
                        "alt": "",
                        "rel": "hero",
                        "width": 363,
                        "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201830/0018/belgian-flax-linen-space-dyed-duvet-cover-shams-m.jpg",
                        "height": 363
                    },
                    "images": [
                        {
                            "size": "m",
                            "meta": "",
                            "alt": "",
                            "rel": "althero",
                            "width": 363,
                            "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201830/0018/belgian-flax-linen-space-dyed-duvet-cover-shams-1-m.jpg",
                            "height": 363
                        }
                    ],
                    "swatches": [],
                    "messages": [],
                    "flags": [
                        {
                            "bopisSuppress": false,
                            "rank": 3,
                            "id": "newcore"
                        },
                        {
                            "bopisSuppress": false,
                            "rank": 9,
                            "id": "fairTrade"
                        }
                    ],
                    "reviews": {
                        "recommendationCount": 0,
                        "likelihood": 0,
                        "reviewCount": 0,
                        "averageRating": 0,
                        "id": "belgian-flax-linen-space-dyed-duvet-cover-shams-b2506",
                        "type": "GROUP_REVIEWS"
                    }
                },
                {
                    "id": "heathered-sateen-quilt-shams-b2485",
                    "name": "Heathered Sateen Quilt + Shams",
                    "links": {
                        "www": "https://www.westelm.com/products/heathered-sateen-quilt-shams-b2485/"
                    },
                    "priceRange": {
                        "regular": {
                            "high": 179,
                            "low": 34
                        },
                        "selling": {
                            "high": 143,
                            "low": 27
                        },
                        "type": "special"
                    },
                    "thumbnail": {
                        "size": "m",
                        "meta": "",
                        "alt": "",
                        "rel": "thumbnail",
                        "width": 363,
                        "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201825/0002/heathered-sateen-quilt-shams-m.jpg",
                        "height": 363
                    },
                    "hero": {
                        "size": "m",
                        "meta": "",
                        "alt": "",
                        "rel": "hero",
                        "width": 363,
                        "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201825/0002/heathered-sateen-quilt-shams-m.jpg",
                        "height": 363
                    },
                    "images": [
                        {
                            "size": "m",
                            "meta": "",
                            "alt": "",
                            "rel": "althero",
                            "width": 363,
                            "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201825/0001/heathered-sateen-quilt-shams-1-m.jpg",
                            "height": 363
                        },
                        {
                            "size": "m",
                            "meta": "",
                            "alt": "",
                            "rel": "althero",
                            "width": 363,
                            "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201827/0009/organic-ikat-stripe-duvet-cover-shams-m.jpg",
                            "height": 363
                        },
                        {
                            "size": "m",
                            "meta": "",
                            "alt": "",
                            "rel": "althero",
                            "width": 363,
                            "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201825/0001/heathered-sateen-quilt-shams-m.jpg",
                            "height": 363
                        }
                    ],
                    "swatches": [],
                    "messages": [],
                    "flags": [
                        {
                            "bopisSuppress": false,
                            "rank": 3,
                            "id": "newcore"
                        },
                        {
                            "bopisSuppress": false,
                            "rank": 7,
                            "id": "organic"
                        },
                        {
                            "bopisSuppress": false,
                            "rank": 9,
                            "id": "fairTrade"
                        }
                    ],
                    "reviews": {
                        "recommendationCount": 0,
                        "likelihood": 0,
                        "reviewCount": 0,
                        "averageRating": 0,
                        "id": "heathered-sateen-quilt-shams-b2485",
                        "type": "GROUP_REVIEWS"
                    }
                }
            ],
            "totalPages": 57,
            "categories": []
        }
        return of(products);
    }
}
