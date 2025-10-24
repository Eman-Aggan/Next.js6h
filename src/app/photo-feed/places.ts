import photo1 from "./photos/photo1.jpg"
import photo2 from "./photos/photo2.jpg"
import photo3 from "./photos/photo3.jpg"
import photo4 from "./photos/photo4.jpg"
import photo5 from "./photos/photo5.jpg"
import photo6 from "./photos/photo6.jpg"
import photo7 from "./photos/photo7.jpg"
import photo8 from "./photos/photo8.jpg"
import photo9 from "./photos/photo9.jpg"
import photo10 from "./photos/photo10.jpg"
// import photo11 from "./photos/photo11.jpg"
import photo12 from "./photos/photo12.avif"
import { StaticImageData } from 'next/image'; 

type placeImage = {
    id: string;
    name: string;
    src: StaticImageData; 
    photographer: string;
    location: string;
};
const placesImages: placeImage [] =[
    {id:"1",
    name:"1",
    src: photo1,
    photographer:"Photo By ... on unsplash",
    location: "",
    },
   { id:"2",
    name:"2",
    src: photo2,
    photographer:"Photo By ... on unsplash",
    location: "",
    },

    { id:"3",
    name:"3",
    src: photo3,
    photographer:"Photo By ... on unsplash",
    location: "",
    },
    { id:"4",
    name:"4",
    src: photo4,
    photographer:"Photo By ... on unsplash",
    location: "",
    },
    { id:"5",
    name:"5",
    src: photo5,
    photographer:"Photo By ... on unsplash",
    location: "",
    },
    { id:"6",
    name:"6",
    src: photo6,
    photographer:"Photo By ... on unsplash",
    location: "",
    },
    { id:"7",
    name:"7",
    src: photo7,
    photographer:"Photo By ... on unsplash",
    location: "",
    },
    { id:"8",
    name:"8",
    src: photo8,
    photographer:"Photo By ... on unsplash",
    location: "",
    },
    { id:"9",
    name:"9",
    src: photo9,
    photographer:"Photo By ... on unsplash",
    location: "",
    },
    { id:"10",
    name:"10",
    src: photo10,
    photographer:"Photo By ... on unsplash",
    location: "",
    },
    // { id:"11",
    // name:"11",
    // src: photo11,
    // photographer:"Photo By ... on unsplash",
    // location: "",
    // },
    { id:"12",
    name:"12",
    src: photo12,
    photographer:"Photo By ... on unsplash",
    location: "",
    }
];
export default placesImages  ;