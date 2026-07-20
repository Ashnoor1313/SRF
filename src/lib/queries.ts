import { groq } from "next-sanity";

export const getPageQuery = groq`*[_type == "page" && slug.current == $slug][0]{
  _id,
  title,
  seoTitle,
  seoDescription,
  content
}`;

export const getProductsQuery = groq`*[_type == "product"] | order(name asc){
  _id,
  name,
  slug,
  description,
  image,
  category->{
    title
  },
  features
}`;

export const getProductBySlugQuery = groq`*[_type == "product" && slug.current == $slug][0]{
  _id,
  name,
  description,
  image,
  gallery,
  category->{
    title
  },
  features
}`;

export const getIndustriesQuery = groq`*[_type == "industry"] | order(title asc){
  _id,
  title,
  description,
  image
}`;
