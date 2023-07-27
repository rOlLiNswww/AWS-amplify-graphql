/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateInventory = /* GraphQL */ `
  subscription OnCreateInventory(
    $filter: ModelSubscriptionInventoryFilterInput
    $owner: String
  ) {
    onCreateInventory(filter: $filter, owner: $owner) {
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
      owner
      __typename
    }
  }
`;
export const onUpdateInventory = /* GraphQL */ `
  subscription OnUpdateInventory(
    $filter: ModelSubscriptionInventoryFilterInput
    $owner: String
  ) {
    onUpdateInventory(filter: $filter, owner: $owner) {
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
      owner
      __typename
    }
  }
`;
export const onDeleteInventory = /* GraphQL */ `
  subscription OnDeleteInventory(
    $filter: ModelSubscriptionInventoryFilterInput
    $owner: String
  ) {
    onDeleteInventory(filter: $filter, owner: $owner) {
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
      owner
      __typename
    }
  }
`;
export const onCreateAddOn = /* GraphQL */ `
  subscription OnCreateAddOn(
    $filter: ModelSubscriptionAddOnFilterInput
    $owner: String
  ) {
    onCreateAddOn(filter: $filter, owner: $owner) {
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
        owner
        __typename
      }
      name
      productID
      createdAt
      updatedAt
      addOnImprintMethodId
      owner
      __typename
    }
  }
`;
export const onUpdateAddOn = /* GraphQL */ `
  subscription OnUpdateAddOn(
    $filter: ModelSubscriptionAddOnFilterInput
    $owner: String
  ) {
    onUpdateAddOn(filter: $filter, owner: $owner) {
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
        owner
        __typename
      }
      name
      productID
      createdAt
      updatedAt
      addOnImprintMethodId
      owner
      __typename
    }
  }
`;
export const onDeleteAddOn = /* GraphQL */ `
  subscription OnDeleteAddOn(
    $filter: ModelSubscriptionAddOnFilterInput
    $owner: String
  ) {
    onDeleteAddOn(filter: $filter, owner: $owner) {
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
        owner
        __typename
      }
      name
      productID
      createdAt
      updatedAt
      addOnImprintMethodId
      owner
      __typename
    }
  }
`;
export const onCreateSupplier = /* GraphQL */ `
  subscription OnCreateSupplier(
    $filter: ModelSubscriptionSupplierFilterInput
    $owner: String
  ) {
    onCreateSupplier(filter: $filter, owner: $owner) {
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
      owner
      __typename
    }
  }
`;
export const onUpdateSupplier = /* GraphQL */ `
  subscription OnUpdateSupplier(
    $filter: ModelSubscriptionSupplierFilterInput
    $owner: String
  ) {
    onUpdateSupplier(filter: $filter, owner: $owner) {
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
      owner
      __typename
    }
  }
`;
export const onDeleteSupplier = /* GraphQL */ `
  subscription OnDeleteSupplier(
    $filter: ModelSubscriptionSupplierFilterInput
    $owner: String
  ) {
    onDeleteSupplier(filter: $filter, owner: $owner) {
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
      owner
      __typename
    }
  }
`;
export const onCreateCategoryChild = /* GraphQL */ `
  subscription OnCreateCategoryChild(
    $filter: ModelSubscriptionCategoryChildFilterInput
    $owner: String
  ) {
    onCreateCategoryChild(filter: $filter, owner: $owner) {
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
        owner
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateCategoryChild = /* GraphQL */ `
  subscription OnUpdateCategoryChild(
    $filter: ModelSubscriptionCategoryChildFilterInput
    $owner: String
  ) {
    onUpdateCategoryChild(filter: $filter, owner: $owner) {
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
        owner
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteCategoryChild = /* GraphQL */ `
  subscription OnDeleteCategoryChild(
    $filter: ModelSubscriptionCategoryChildFilterInput
    $owner: String
  ) {
    onDeleteCategoryChild(filter: $filter, owner: $owner) {
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
        owner
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateCategoryParent = /* GraphQL */ `
  subscription OnCreateCategoryParent(
    $filter: ModelSubscriptionCategoryParentFilterInput
    $owner: String
  ) {
    onCreateCategoryParent(filter: $filter, owner: $owner) {
      id
      CategoryChildren {
        nextToken
        __typename
      }
      name
      slug
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateCategoryParent = /* GraphQL */ `
  subscription OnUpdateCategoryParent(
    $filter: ModelSubscriptionCategoryParentFilterInput
    $owner: String
  ) {
    onUpdateCategoryParent(filter: $filter, owner: $owner) {
      id
      CategoryChildren {
        nextToken
        __typename
      }
      name
      slug
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteCategoryParent = /* GraphQL */ `
  subscription OnDeleteCategoryParent(
    $filter: ModelSubscriptionCategoryParentFilterInput
    $owner: String
  ) {
    onDeleteCategoryParent(filter: $filter, owner: $owner) {
      id
      CategoryChildren {
        nextToken
        __typename
      }
      name
      slug
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateDecoration = /* GraphQL */ `
  subscription OnCreateDecoration(
    $filter: ModelSubscriptionDecorationFilterInput
    $owner: String
  ) {
    onCreateDecoration(filter: $filter, owner: $owner) {
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
        owner
        __typename
      }
      createdAt
      updatedAt
      decorationImprintMethodId
      owner
      __typename
    }
  }
`;
export const onUpdateDecoration = /* GraphQL */ `
  subscription OnUpdateDecoration(
    $filter: ModelSubscriptionDecorationFilterInput
    $owner: String
  ) {
    onUpdateDecoration(filter: $filter, owner: $owner) {
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
        owner
        __typename
      }
      createdAt
      updatedAt
      decorationImprintMethodId
      owner
      __typename
    }
  }
`;
export const onDeleteDecoration = /* GraphQL */ `
  subscription OnDeleteDecoration(
    $filter: ModelSubscriptionDecorationFilterInput
    $owner: String
  ) {
    onDeleteDecoration(filter: $filter, owner: $owner) {
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
        owner
        __typename
      }
      createdAt
      updatedAt
      decorationImprintMethodId
      owner
      __typename
    }
  }
`;
export const onCreateImprintMethod = /* GraphQL */ `
  subscription OnCreateImprintMethod(
    $filter: ModelSubscriptionImprintMethodFilterInput
    $owner: String
  ) {
    onCreateImprintMethod(filter: $filter, owner: $owner) {
      id
      name
      max_colour
      supplierID
      services
      charges
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateImprintMethod = /* GraphQL */ `
  subscription OnUpdateImprintMethod(
    $filter: ModelSubscriptionImprintMethodFilterInput
    $owner: String
  ) {
    onUpdateImprintMethod(filter: $filter, owner: $owner) {
      id
      name
      max_colour
      supplierID
      services
      charges
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteImprintMethod = /* GraphQL */ `
  subscription OnDeleteImprintMethod(
    $filter: ModelSubscriptionImprintMethodFilterInput
    $owner: String
  ) {
    onDeleteImprintMethod(filter: $filter, owner: $owner) {
      id
      name
      max_colour
      supplierID
      services
      charges
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreatePriceTable = /* GraphQL */ `
  subscription OnCreatePriceTable(
    $filter: ModelSubscriptionPriceTableFilterInput
    $owner: String
  ) {
    onCreatePriceTable(filter: $filter, owner: $owner) {
      id
      description
      productID
      country_code
      moq
      moq_surcharge
      pricing
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdatePriceTable = /* GraphQL */ `
  subscription OnUpdatePriceTable(
    $filter: ModelSubscriptionPriceTableFilterInput
    $owner: String
  ) {
    onUpdatePriceTable(filter: $filter, owner: $owner) {
      id
      description
      productID
      country_code
      moq
      moq_surcharge
      pricing
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeletePriceTable = /* GraphQL */ `
  subscription OnDeletePriceTable(
    $filter: ModelSubscriptionPriceTableFilterInput
    $owner: String
  ) {
    onDeletePriceTable(filter: $filter, owner: $owner) {
      id
      description
      productID
      country_code
      moq
      moq_surcharge
      pricing
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct(
    $filter: ModelSubscriptionProductFilterInput
    $owner: String
  ) {
    onCreateProduct(filter: $filter, owner: $owner) {
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
        owner
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
      files
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct(
    $filter: ModelSubscriptionProductFilterInput
    $owner: String
  ) {
    onUpdateProduct(filter: $filter, owner: $owner) {
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
        owner
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
      files
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct(
    $filter: ModelSubscriptionProductFilterInput
    $owner: String
  ) {
    onDeleteProduct(filter: $filter, owner: $owner) {
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
        owner
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
      files
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
