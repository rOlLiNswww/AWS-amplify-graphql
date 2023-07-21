/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateInventory = /* GraphQL */ `
  subscription OnCreateInventory(
    $filter: ModelSubscriptionInventoryFilterInput
  ) {
    onCreateInventory(filter: $filter) {
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
export const onUpdateInventory = /* GraphQL */ `
  subscription OnUpdateInventory(
    $filter: ModelSubscriptionInventoryFilterInput
  ) {
    onUpdateInventory(filter: $filter) {
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
export const onDeleteInventory = /* GraphQL */ `
  subscription OnDeleteInventory(
    $filter: ModelSubscriptionInventoryFilterInput
  ) {
    onDeleteInventory(filter: $filter) {
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
export const onCreateAddOn = /* GraphQL */ `
  subscription OnCreateAddOn($filter: ModelSubscriptionAddOnFilterInput) {
    onCreateAddOn(filter: $filter) {
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
export const onUpdateAddOn = /* GraphQL */ `
  subscription OnUpdateAddOn($filter: ModelSubscriptionAddOnFilterInput) {
    onUpdateAddOn(filter: $filter) {
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
export const onDeleteAddOn = /* GraphQL */ `
  subscription OnDeleteAddOn($filter: ModelSubscriptionAddOnFilterInput) {
    onDeleteAddOn(filter: $filter) {
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
export const onCreateSupplier = /* GraphQL */ `
  subscription OnCreateSupplier($filter: ModelSubscriptionSupplierFilterInput) {
    onCreateSupplier(filter: $filter) {
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
export const onUpdateSupplier = /* GraphQL */ `
  subscription OnUpdateSupplier($filter: ModelSubscriptionSupplierFilterInput) {
    onUpdateSupplier(filter: $filter) {
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
export const onDeleteSupplier = /* GraphQL */ `
  subscription OnDeleteSupplier($filter: ModelSubscriptionSupplierFilterInput) {
    onDeleteSupplier(filter: $filter) {
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
export const onCreateCategoryChild = /* GraphQL */ `
  subscription OnCreateCategoryChild(
    $filter: ModelSubscriptionCategoryChildFilterInput
  ) {
    onCreateCategoryChild(filter: $filter) {
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
export const onUpdateCategoryChild = /* GraphQL */ `
  subscription OnUpdateCategoryChild(
    $filter: ModelSubscriptionCategoryChildFilterInput
  ) {
    onUpdateCategoryChild(filter: $filter) {
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
export const onDeleteCategoryChild = /* GraphQL */ `
  subscription OnDeleteCategoryChild(
    $filter: ModelSubscriptionCategoryChildFilterInput
  ) {
    onDeleteCategoryChild(filter: $filter) {
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
export const onCreateCategoryParent = /* GraphQL */ `
  subscription OnCreateCategoryParent(
    $filter: ModelSubscriptionCategoryParentFilterInput
  ) {
    onCreateCategoryParent(filter: $filter) {
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
export const onUpdateCategoryParent = /* GraphQL */ `
  subscription OnUpdateCategoryParent(
    $filter: ModelSubscriptionCategoryParentFilterInput
  ) {
    onUpdateCategoryParent(filter: $filter) {
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
export const onDeleteCategoryParent = /* GraphQL */ `
  subscription OnDeleteCategoryParent(
    $filter: ModelSubscriptionCategoryParentFilterInput
  ) {
    onDeleteCategoryParent(filter: $filter) {
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
export const onCreateDecoration = /* GraphQL */ `
  subscription OnCreateDecoration(
    $filter: ModelSubscriptionDecorationFilterInput
  ) {
    onCreateDecoration(filter: $filter) {
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
export const onUpdateDecoration = /* GraphQL */ `
  subscription OnUpdateDecoration(
    $filter: ModelSubscriptionDecorationFilterInput
  ) {
    onUpdateDecoration(filter: $filter) {
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
export const onDeleteDecoration = /* GraphQL */ `
  subscription OnDeleteDecoration(
    $filter: ModelSubscriptionDecorationFilterInput
  ) {
    onDeleteDecoration(filter: $filter) {
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
export const onCreateImprintMethod = /* GraphQL */ `
  subscription OnCreateImprintMethod(
    $filter: ModelSubscriptionImprintMethodFilterInput
  ) {
    onCreateImprintMethod(filter: $filter) {
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
export const onUpdateImprintMethod = /* GraphQL */ `
  subscription OnUpdateImprintMethod(
    $filter: ModelSubscriptionImprintMethodFilterInput
  ) {
    onUpdateImprintMethod(filter: $filter) {
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
export const onDeleteImprintMethod = /* GraphQL */ `
  subscription OnDeleteImprintMethod(
    $filter: ModelSubscriptionImprintMethodFilterInput
  ) {
    onDeleteImprintMethod(filter: $filter) {
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
export const onCreatePriceTable = /* GraphQL */ `
  subscription OnCreatePriceTable(
    $filter: ModelSubscriptionPriceTableFilterInput
  ) {
    onCreatePriceTable(filter: $filter) {
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
export const onUpdatePriceTable = /* GraphQL */ `
  subscription OnUpdatePriceTable(
    $filter: ModelSubscriptionPriceTableFilterInput
  ) {
    onUpdatePriceTable(filter: $filter) {
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
export const onDeletePriceTable = /* GraphQL */ `
  subscription OnDeletePriceTable(
    $filter: ModelSubscriptionPriceTableFilterInput
  ) {
    onDeletePriceTable(filter: $filter) {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
    onCreateProduct(filter: $filter) {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
    onUpdateProduct(filter: $filter) {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
    onDeleteProduct(filter: $filter) {
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
