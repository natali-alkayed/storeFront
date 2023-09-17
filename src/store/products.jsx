const initialState =
    [
        {
            id: 1,
            category: 'Games',
            name: 'Red Dead Redemption 2',
            description: 'Enter the wild west in this epic open-world adventure.',
            price: 44.99,
            inventoryCount: 10,
            imgPath: 'https://assets1.ignimgs.com/2016/10/18/red-dead-redemption-2-buttonjpg-f9ad35.jpg?width=300&crop=1%3A1%2Csmart',
        },
        {
            id: 2,
            category: 'Games',
            name: 'FIFA 22',
            description: 'Experience the thrill of soccer with realistic gameplay.',
            price: 49.99,
            inventoryCount: 8,
            imgPath: 'https://images.g2a.com/360x600/1x1x1/fifa-22-pc-origin-key-global-i10000263306024/dce7598de0604b70ae47d576',
        },

        {
            id: 3,
            category: 'Games',
            name: 'Assassin\'s Creed Valhalla',
            description: 'Become a Viking warrior and conquer England.',
            price: 59.99,
            inventoryCount: 5,
            imgPath: 'https://images.g2a.com/360x600/1x1x1/assassins-creed-valhalla-pc-steam-account-account-global-i10000195319070/5eafb2137e696c3d7e0ba4f2',
        },
        {
            id: 4,
            category: 'Games',
            name: 'Minecraft',
            description: 'Build and explore in a blocky, open-world sandbox game.',
            price: 29.99,
            inventoryCount: 20,
            imgPath: 'https://images.g2a.com/360x600/1x1x1/minecraft-pc-mac-microsoft-key-global-i10000068122029/cc151a6678c84f75b86310a4',
        },
        {
            id: 5,
            category: 'Games',
            name: 'The Witcher 3: Wild Hunt',
            description: 'Embark on a quest as Geralt of Rivia in this epic RPG.',
            price: 34.99,
            inventoryCount: 15,
            imgPath: 'https://cdn1.epicgames.com/offer/14ee004dadc142faaaece5a6270fb628/EGS_TheWitcher3WildHuntCompleteEdition_CDPROJEKTRED_S1_2560x1440-82eb5cf8f725e329d3194920c0c0b64f',
        },

        {
            id: 6,
            category: 'Electronics',
            name: 'Apple MacBook Air',
            description: 'A sleek and lightweight laptop for productivity on the go.',
            price: 999.99,
            inventoryCount: 7,
            imgPath: 'https://macsjo.com/wp-content/uploads/2023/07/KsvPjkcHBEVaTvkC_bf348823-d180-496c-b743-bb5408d14827.webp',
        },
        {
            id: 7,
            category: 'Electronics',
            name: 'Sony PlayStation 5',
            description: 'Experience next-gen gaming with the PS5 console.',
            price: 499.99,
            inventoryCount: 10,
            imgPath: 'https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$',
        },
        {
            id: 8,
            category: 'Electronics',
            name: 'Samsung 55-inch 4K Smart TV',
            description: 'Immerse yourself in stunning 4K resolution and smart features.',
            price: 699.99,
            inventoryCount: 4,
            imgPath: 'https://images.samsung.com/is/image/samsung/p6pim/levant/ua55tu8300uxtw/gallery/levant-uhd-tu8300-ua55tu8300uxtw-thumb-375035123?$344_344_PNG$',
        },
        {
            id: 9,
            category: 'Electronics',
            name: 'Bose Noise-Cancelling Headphones 700',
            description: 'Enjoy superior sound quality and noise cancellation.',
            price: 349.99,
            inventoryCount: 15,
            imgPath: 'https://www.dna.jo/cdn/shop/products/105_8583d47a-9bc6-41ce-8ae5-ad4a464febd0_800x.jpg?v=1647522041',
        },
        {
            id: 10,
            category: 'Electronics',
            name: 'Canon EOS 90D DSLR Camera',
            description: 'Capture high-quality photos and videos with this DSLR.',
            price: 1099.99,
            inventoryCount: 6,
            imgPath: 'https://www.bhphotovideo.com/images/images1000x1000/canon_3616c016_eos_90d_dslr_camera_1502489.jpg',
        },



    ];


export const decreaseInventory = (productId) => ({
  type: 'DECREASE_INVENTORY',
  payload: productId,
});

export const increaseInventory = (productId) => ({
  type: 'INCREASE_INVENTORY',
  payload: productId,
});


const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DECREASE_INVENTORY':
      const productToUpdate = state.find((product) => product.id === action.payload);
      if (productToUpdate && productToUpdate.inventoryCount > 0) {
        return state.map((product) =>
          product.id === action.payload
            ? { ...product, inventoryCount: product.inventoryCount - 1 }
            : product
        );
      }
      return state; 

    case 'INCREASE_INVENTORY':
      const productToIncrease = state.find((product) => product.id === action.payload);
      if (productToIncrease) {
        return state.map((product) =>
          product.id === action.payload
            ? { ...product, inventoryCount: product.inventoryCount + 1 }
            : product
        );
      }
      return state;

    default:
      return state;
  }
};

export default productsReducer;