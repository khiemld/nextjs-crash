import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY = defineQuery(
  `
  *[_type == "startup" && defined(slug.current) && !defined($search) || title match $search || category match $search || author->name match $search] | order(_createdAt desc) {
      _id,
      title,
      slug,
      author->{
        name,
        image
      },
      views,
      description,
      category,
      image,
      _createdAt
    }
  `
);

export const STARTUP_BY_ID_QUERY = defineQuery(
  `*[_type== "startup" && _id == $id][0]{
      _id,
      title,
      slug,
      _createAt,
      author -> {
        _id,
        name,
        username, 
        bio,
        image
      },
      views,
      description,
      category,
      image,
      pitch
    }`
);
