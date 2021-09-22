import React, { useReducer } from "react";

import ShopContext from "./shop-context";
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from "./reducers";
const GlobalState = props => {
  const products = [
    {
        id: '1',
        name: 'Zoom Freak 3',
        image: '/images/zoom4.jpg',
        description: 'Giannis has a freakishly athletic game that combines massive strides, misdirecting Euro steps, and the ability to play any position—and get by anyone on his way to the rim.',
        brand: 'Nike',
        category: 'Sneackers',
        price: 140,
        countInStock: 10,
        rating: 4.5,
        numReviews: 12,
        size: [41, 42, 43, 44, 45, 46],
        

    },
    {
        id: '2',
        name: 'Air Jordan 1 Mid',
        image: '/images/airjordan1mid.jpeg',
        description: 'The Air Jordan 1 Mid Shoe is inspired by the first AJ1, offering fans of Jordan retros a chance to follow in the footsteps of greatness.Fresh colour trims the clean, classic materials, injecting some newness into the familiar design.',
        brand: 'Nike',
        category: 'Sneackers',
        price: 139,

        countInStock: 7,
        rating: 4.0,
        numReviews: 8,
        size: [41, 42, 43, 44, 45, 46],
    },
    {
        id: '3',
        name: 'Nike Pegasus Trail 3',
        image: '/images/Pegasus.jpeg',
        description: 'Move seamlessly from cityscapes to trails without compromising your aesthetic in the Nike Pegasus Trail 3.Desaturated tones and hidden wilderness markers are paired with the same cushioned comfort and traction you love.Support around the midfoot helps you feel secure on your journey, tackling tough terrain and city lanes in one classic shoe.',
        brand: 'Nike',
        category: 'Sneackers',
        price: 149,
        countInStock: 5,
        rating: 3,
        numReviews: 12,
        size: [41, 42, 43, 44, 45, 46],
    },
    {
        id: '4',
        name: 'Nike Air Force 1',
        image: '/images/airforce1.jpeg',
        description: 'Multiply the Swoosh, multiply the force in the Nike Air Force 1.The b-ball OG incorporates the same hoops-inspired performance features of the original while adding fresh design details.The leather upper features multiple Swoosh graphics and bold colour accents for a dynamic look and feel.',
        brand: 'Nike',
        category: 'Sneackers',
        price: 129,
        countInStock: 10,
        rating: 5,
        numReviews: 12,
        size: [41, 42, 43, 44, 45, 46],
    },
    {
        id: '5',
        name: 'Nike Air Max Plus III',
        image: '/images/airmaxplus.jpeg',
        description: 'Featuring the same Tuned Air technology as its predecessors, the Nike Air Max Plus III updates the look with plastic accents fused to the upper while paying homage to the iconic colour fade of the OG.',
        brand: 'Nike',
        category: 'Sneackers',
        price: 249,
        countInStock: 7,
        rating: 3.5,
        numReviews: 10,
        size: [41, 42, 43, 44, 45, 46],
    },
    {
        id: '6',
        name: 'Jordan 4 G',
        image: '/images/jordan4.jpeg',
        description: 'One of the most coveted shoes of all time gets rebuilt for golf.With visible Air-Sole units and removable spikes, these shoes deliver the grip and comfort you need to play at your best with the legendary style of the original.',
        brand: 'Jordan',
        category: 'Sneackers',
        price: 269.99,
        countInStock: 10,
        rating: 4,
        numReviews: 12,
        size: [41, 42, 43, 44, 45, 46],
    },
    {
        id: '7',
        name: 'LeBron 18 Low',
        image: '/images/lebron18.jpeg',
        description: 'LeBrons high performance engine needs a light yet strong frame to help harness and direct his force. The LeBron 18 Low brings back the 17s cushioning system to provide an optimal balance of comfort, impact cushioning and responsiveness. The upper combines a mix of lightweight materials, no-sew overlays and a structured heel to provide full-foot containment without sacrificing ankle mobility.',
        brand: 'Jordan',
        category: 'Sneackers',
        price: 209.99,
        countInStock: 7,
        rating: 4,
        numReviews: 12,
        size: [41, 42, 43, 44, 45, 46],
    },
    {
        id: '8',
        name: 'Nike Victori One',
        image: '/images/victori.jpeg',
        description: 'From the beach to gardening to sitting on the sofa, the Nike Victori One perfects a classic design. Delivering lightweight comfort thats easy to wear, it features new softer, more responsive foam. The contoured grip pattern helps cradle and hold your foot in place.',
        brand: 'Nike',
        category: 'Sandals',
        price: 29,
        countInStock: 10,
        rating: 4,
        numReviews: 12,
        size: [41, 42, 43, 44, 45, 46],
    },
    {
        id: '9',
        name: 'Nike Kawa',
        image: '/images/kawa.jpeg',
        description: 'The Nike Kawa Slide is your super-easy slip-on for any time. With a soft and flexible design, these sandals help growing feet recover after training, playtime or any adventure (like a beach day).',
        brand: 'Nike',
        category: 'Sandals',
        price: 29,
        countInStock: 10,
        rating: 4,
        numReviews: 12,
        size: [41, 42, 43, 44, 45, 46],
    },
    {
        id: '10',
        name: 'Nike Victori One',
        image: '/images/victori.jpeg',
        description: 'From the beach to gardening to sitting on the sofa, the Nike Victori One perfects a classic design. Delivering lightweight comfort thats easy to wear, it features new softer, more responsive foam. The contoured grip pattern helps cradle and hold your foot in place.',
        brand: 'Nike',
        category: 'Sandals',
        price: 29,
        countInStock: 10,
        rating: 4,
        numReviews: 12,
        size: [41, 42, 43, 44, 45, 46],
    },
    {
        id: '11',
        name: 'Nike Air Max Koko Serena Design Crew',
        image: '/images/koko.jpeg',
        description: 'Heat up your wardrobe in the Nike Air Max Koko Serena Design Crew.Designed to break barriers, this platform sandal adds a splash to any outfit.A thick, layered foam midsole provides a smooth and flexible feel.The SDC "10 4 01" logo on the top celebrates inclusivity, diversity and the bond between individual and team.',
        brand: 'Nike',
        category: 'Sandals',
        price: 29,
        countInStock: 10,
        rating: 4,
        numReviews: 12,
        size: [41, 42, 43, 44, 45, 46],
    },
    {
        id: '12',
        name: 'Nike Air Zoom Alphafly NEXT% Eliud',
        image: '/images/zoom.jpeg',
        description: 'Gear up for your next personal best with the Nike Air Zoom Alphafly NEXT%. Responsive foam and Zoom Air units combine to push your running game forwards for your next marathon or road race. Graphics and colours nod to Eliud Kipchoges record-breaking run.',
        brand: 'Nike',
        category: 'Sneackers',
        price: 29,
        countInStock: 10,
        rating: 4,
        numReviews: 12,
        size: [41, 42, 43, 44, 45, 46],
    },
  ];
  // const [cart, setCart] = useState([]);
  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

  const addProductToCart = (product) => {
   
    setTimeout(() => {
      // setCart(updatedCart);
      dispatch({ type: ADD_PRODUCT, product: product });
    }, 700);
    
  };

  const removeProductFromCart = productId => {
    setTimeout(() => {
      // setCart(updatedCart);
      dispatch({ type: REMOVE_PRODUCT, productId: productId });
    }, 700);
  };

  return (
    <ShopContext.Provider
      value={{
        products: products,
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default GlobalState;
