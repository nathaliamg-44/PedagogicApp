import { Address } from 'expo-location'
import { ImageSourcePropType } from 'react-native';


// category
export interface Category{
    id: string,
    title: String,
    icon: ImageSourcePropType
}

//Notice Model
export interface Notice{
    _id: string;
    title: String;
    subtitle: string;
    summary: string;
    info: string;
    date: string;
    autor: string;
    image: ImageSourcePropType;
}


