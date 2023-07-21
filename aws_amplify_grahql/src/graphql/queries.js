/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getInventory = /* GraphQL */ `
  query GetInventory($id: ID!) {
    getInventory(id: $id) {
      id
      productID
      supplierID
      name
      code
      colour
      stock_onhand
      stock_incoming
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listInventories = /* GraphQL */ `
  query ListInventories(
    $filter: ModelInventoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInventories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        productID
        supplierID
        name
        code
        colour
        stock_onhand
        stock_incoming
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const inventoriesByProductID = /* GraphQL */ `
  query InventoriesByProductID(
    $productID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelInventoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    inventoriesByProductID(
      productID: $productID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        productID
        supplierID
        name
        code
        colour
        stock_onhand
        stock_incoming
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const inventoriesBySupplierID = /* GraphQL */ `
  query InventoriesBySupplierID(
    $supplierID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelInventoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    inventoriesBySupplierID(
      supplierID: $supplierID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        productID
        supplierID
        name
        code
        colour
        stock_onhand
        stock_incoming
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAddOn = /* GraphQL */ `
  query GetAddOn($id: ID!) {
    getAddOn(id: $id) {
      id
      cost
      ImprintMethod {
        id
        name
        max_colour
        supplierID
        services
        charges
        createdAt
        updatedAt
        __typename
      }
      name
      productID
      createdAt
      updatedAt
      addOnImprintMethodId
      __typename
    }
  }
`;
export const listAddOns = /* GraphQL */ `
  query ListAddOns(
    $filter: ModelAddOnFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAddOns(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cost
        ImprintMethod {
          id
          name
          max_colour
          supplierID
          services
          charges
          createdAt
          updatedAt
          __typename
        }
        name
        productID
        createdAt
        updatedAt
        addOnImprintMethodId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const addOnsByProductID = /* GraphQL */ `
  query AddOnsByProductID(
    $productID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAddOnFilterInput
    $limit: Int
    $nextToken: String
  ) {
    addOnsByProductID(
      productID: $productID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        cost
        ImprintMethod {
          id
          name
          max_colour
          supplierID
          services
          charges
          createdAt
          updatedAt
          __typename
        }
        name
        productID
        createdAt
        updatedAt
        addOnImprintMethodId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSupplier = /* GraphQL */ `
  query GetSupplier($id: ID!) {
    getSupplier(id: $id) {
      id
      name
      code
      Products {
        items {
          id
          supplierID
          code
          colour
          name
          related_product
          is_discontinued
          supplier_categories
          short_description
          full_description
          feature_tags
          keywords
          colour_details
          avaliable_branding
          spedification
          packaging
          shipping_cost
          lowest_price
          available_country
          additional_info
          product_url
          images
          files
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Inventories {
        items {
          id
          productID
          supplierID
          name
          code
          colour
          stock_onhand
          stock_incoming
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      ImprintMethods {
        items {
          id
          name
          max_colour
          supplierID
          services
          charges
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSuppliers = /* GraphQL */ `
  query ListSuppliers(
    $filter: ModelSupplierFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSuppliers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        code
        Products {
          nextToken
          __typename
        }
        Inventories {
          nextToken
          __typename
        }
        ImprintMethods {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCategoryChild = /* GraphQL */ `
  query GetCategoryChild($id: ID!) {
    getCategoryChild(id: $id) {
      id
      categoryparentID
      name
      slug
      CategoryParent {
        id
        CategoryChildren {
          nextToken
          __typename
        }
        name
        slug
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCategoryChildren = /* GraphQL */ `
  query ListCategoryChildren(
    $filter: ModelCategoryChildFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategoryChildren(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        categoryparentID
        name
        slug
        CategoryParent {
          id
          name
          slug
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const categoryChildrenByCategoryparentID = /* GraphQL */ `
  query CategoryChildrenByCategoryparentID(
    $categoryparentID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCategoryChildFilterInput
    $limit: Int
    $nextToken: String
  ) {
    categoryChildrenByCategoryparentID(
      categoryparentID: $categoryparentID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        categoryparentID
        name
        slug
        CategoryParent {
          id
          name
          slug
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCategoryParent = /* GraphQL */ `
  query GetCategoryParent($id: ID!) {
    getCategoryParent(id: $id) {
      id
      CategoryChildren {
        items {
          id
          categoryparentID
          name
          slug
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      name
      slug
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCategoryParents = /* GraphQL */ `
  query ListCategoryParents(
    $filter: ModelCategoryParentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategoryParents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        CategoryChildren {
          nextToken
          __typename
        }
        name
        slug
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getDecoration = /* GraphQL */ `
  query GetDecoration($id: ID!) {
    getDecoration(id: $id) {
      id
      imprint_area
      productID
      ImprintMethod {
        id
        name
        max_colour
        supplierID
        services
        charges
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      decorationImprintMethodId
      __typename
    }
  }
`;
export const listDecorations = /* GraphQL */ `
  query ListDecorations(
    $filter: ModelDecorationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDecorations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        imprint_area
        productID
        ImprintMethod {
          id
          name
          max_colour
          supplierID
          services
          charges
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        decorationImprintMethodId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const decorationsByProductID = /* GraphQL */ `
  query DecorationsByProductID(
    $productID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDecorationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    decorationsByProductID(
      productID: $productID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        imprint_area
        productID
        ImprintMethod {
          id
          name
          max_colour
          supplierID
          services
          charges
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        decorationImprintMethodId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getImprintMethod = /* GraphQL */ `
  query GetImprintMethod($id: ID!) {
    getImprintMethod(id: $id) {
      id
      name
      max_colour
      supplierID
      services
      charges
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listImprintMethods = /* GraphQL */ `
  query ListImprintMethods(
    $filter: ModelImprintMethodFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImprintMethods(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        max_colour
        supplierID
        services
        charges
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const imprintMethodsBySupplierID = /* GraphQL */ `
  query ImprintMethodsBySupplierID(
    $supplierID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelImprintMethodFilterInput
    $limit: Int
    $nextToken: String
  ) {
    imprintMethodsBySupplierID(
      supplierID: $supplierID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        max_colour
        supplierID
        services
        charges
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPriceTable = /* GraphQL */ `
  query GetPriceTable($id: ID!) {
    getPriceTable(id: $id) {
      id
      description
      productID
      country_code
      moq
      moq_surcharge
      pricing
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPriceTables = /* GraphQL */ `
  query ListPriceTables(
    $filter: ModelPriceTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPriceTables(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        productID
        country_code
        moq
        moq_surcharge
        pricing
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const priceTablesByProductID = /* GraphQL */ `
  query PriceTablesByProductID(
    $productID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPriceTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    priceTablesByProductID(
      productID: $productID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        description
        productID
        country_code
        moq
        moq_surcharge
        pricing
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      supplierID
      code
      PriceTables {
        items {
          id
          description
          productID
          country_code
          moq
          moq_surcharge
          pricing
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      colour
      name
      Supplier {
        id
        name
        code
        Products {
          nextToken
          __typename
        }
        Inventories {
          nextToken
          __typename
        }
        ImprintMethods {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      related_product
      is_discontinued
      supplier_categories
      Decorations {
        items {
          id
          imprint_area
          productID
          createdAt
          updatedAt
          decorationImprintMethodId
          __typename
        }
        nextToken
        __typename
      }
      short_description
      full_description
      feature_tags
      keywords
      colour_details
      avaliable_branding
      spedification
      packaging
      AddOns {
        items {
          id
          cost
          name
          productID
          createdAt
          updatedAt
          addOnImprintMethodId
          __typename
        }
        nextToken
        __typename
      }
      Inventories {
        items {
          id
          productID
          supplierID
          name
          code
          colour
          stock_onhand
          stock_incoming
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      shipping_cost
      lowest_price
      available_country
      additional_info
      product_url
      images
      files
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        supplierID
        code
        PriceTables {
          nextToken
          __typename
        }
        colour
        name
        Supplier {
          id
          name
          code
          createdAt
          updatedAt
          __typename
        }
        related_product
        is_discontinued
        supplier_categories
        Decorations {
          nextToken
          __typename
        }
        short_description
        full_description
        feature_tags
        keywords
        colour_details
        avaliable_branding
        spedification
        packaging
        AddOns {
          nextToken
          __typename
        }
        Inventories {
          nextToken
          __typename
        }
        shipping_cost
        lowest_price
        available_country
        additional_info
        product_url
        images
        files
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;


export const productsBySupplierID = /* GraphQL */ `
  query ProductsBySupplierID(
    $supplierID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productsBySupplierID(
      supplierID: $supplierID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        supplierID
        code
        PriceTables {
          nextToken
          __typename
        }
        colour
        name
        Supplier {
          id
          name
          code
          createdAt
          updatedAt
          __typename
        }
        related_product
        is_discontinued
        supplier_categories
        Decorations {
          nextToken
          __typename
        }
        short_description
        full_description
        feature_tags
        keywords
        colour_details
        avaliable_branding
        spedification
        packaging
        AddOns {
          nextToken
          __typename
        }
        Inventories {
          nextToken
          __typename
        }
        shipping_cost
        lowest_price
        available_country
        additional_info
        product_url
        images
        files
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
