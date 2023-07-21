/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createInventory = /* GraphQL */ `
  mutation CreateInventory(
    $input: CreateInventoryInput!
    $condition: ModelInventoryConditionInput
  ) {
    createInventory(input: $input, condition: $condition) {
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
export const updateInventory = /* GraphQL */ `
  mutation UpdateInventory(
    $input: UpdateInventoryInput!
    $condition: ModelInventoryConditionInput
  ) {
    updateInventory(input: $input, condition: $condition) {
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
export const deleteInventory = /* GraphQL */ `
  mutation DeleteInventory(
    $input: DeleteInventoryInput!
    $condition: ModelInventoryConditionInput
  ) {
    deleteInventory(input: $input, condition: $condition) {
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
export const createAddOn = /* GraphQL */ `
  mutation CreateAddOn(
    $input: CreateAddOnInput!
    $condition: ModelAddOnConditionInput
  ) {
    createAddOn(input: $input, condition: $condition) {
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
export const updateAddOn = /* GraphQL */ `
  mutation UpdateAddOn(
    $input: UpdateAddOnInput!
    $condition: ModelAddOnConditionInput
  ) {
    updateAddOn(input: $input, condition: $condition) {
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
export const deleteAddOn = /* GraphQL */ `
  mutation DeleteAddOn(
    $input: DeleteAddOnInput!
    $condition: ModelAddOnConditionInput
  ) {
    deleteAddOn(input: $input, condition: $condition) {
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
export const createSupplier = /* GraphQL */ `
  mutation CreateSupplier(
    $input: CreateSupplierInput!
    $condition: ModelSupplierConditionInput
  ) {
    createSupplier(input: $input, condition: $condition) {
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
export const updateSupplier = /* GraphQL */ `
  mutation UpdateSupplier(
    $input: UpdateSupplierInput!
    $condition: ModelSupplierConditionInput
  ) {
    updateSupplier(input: $input, condition: $condition) {
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
export const deleteSupplier = /* GraphQL */ `
  mutation DeleteSupplier(
    $input: DeleteSupplierInput!
    $condition: ModelSupplierConditionInput
  ) {
    deleteSupplier(input: $input, condition: $condition) {
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
export const createCategoryChild = /* GraphQL */ `
  mutation CreateCategoryChild(
    $input: CreateCategoryChildInput!
    $condition: ModelCategoryChildConditionInput
  ) {
    createCategoryChild(input: $input, condition: $condition) {
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
export const updateCategoryChild = /* GraphQL */ `
  mutation UpdateCategoryChild(
    $input: UpdateCategoryChildInput!
    $condition: ModelCategoryChildConditionInput
  ) {
    updateCategoryChild(input: $input, condition: $condition) {
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
export const deleteCategoryChild = /* GraphQL */ `
  mutation DeleteCategoryChild(
    $input: DeleteCategoryChildInput!
    $condition: ModelCategoryChildConditionInput
  ) {
    deleteCategoryChild(input: $input, condition: $condition) {
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
export const createCategoryParent = /* GraphQL */ `
  mutation CreateCategoryParent(
    $input: CreateCategoryParentInput!
    $condition: ModelCategoryParentConditionInput
  ) {
    createCategoryParent(input: $input, condition: $condition) {
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
export const updateCategoryParent = /* GraphQL */ `
  mutation UpdateCategoryParent(
    $input: UpdateCategoryParentInput!
    $condition: ModelCategoryParentConditionInput
  ) {
    updateCategoryParent(input: $input, condition: $condition) {
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
export const deleteCategoryParent = /* GraphQL */ `
  mutation DeleteCategoryParent(
    $input: DeleteCategoryParentInput!
    $condition: ModelCategoryParentConditionInput
  ) {
    deleteCategoryParent(input: $input, condition: $condition) {
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
export const createDecoration = /* GraphQL */ `
  mutation CreateDecoration(
    $input: CreateDecorationInput!
    $condition: ModelDecorationConditionInput
  ) {
    createDecoration(input: $input, condition: $condition) {
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
export const updateDecoration = /* GraphQL */ `
  mutation UpdateDecoration(
    $input: UpdateDecorationInput!
    $condition: ModelDecorationConditionInput
  ) {
    updateDecoration(input: $input, condition: $condition) {
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
export const deleteDecoration = /* GraphQL */ `
  mutation DeleteDecoration(
    $input: DeleteDecorationInput!
    $condition: ModelDecorationConditionInput
  ) {
    deleteDecoration(input: $input, condition: $condition) {
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
export const createImprintMethod = /* GraphQL */ `
  mutation CreateImprintMethod(
    $input: CreateImprintMethodInput!
    $condition: ModelImprintMethodConditionInput
  ) {
    createImprintMethod(input: $input, condition: $condition) {
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
export const updateImprintMethod = /* GraphQL */ `
  mutation UpdateImprintMethod(
    $input: UpdateImprintMethodInput!
    $condition: ModelImprintMethodConditionInput
  ) {
    updateImprintMethod(input: $input, condition: $condition) {
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
export const deleteImprintMethod = /* GraphQL */ `
  mutation DeleteImprintMethod(
    $input: DeleteImprintMethodInput!
    $condition: ModelImprintMethodConditionInput
  ) {
    deleteImprintMethod(input: $input, condition: $condition) {
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
export const createPriceTable = /* GraphQL */ `
  mutation CreatePriceTable(
    $input: CreatePriceTableInput!
    $condition: ModelPriceTableConditionInput
  ) {
    createPriceTable(input: $input, condition: $condition) {
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
export const updatePriceTable = /* GraphQL */ `
  mutation UpdatePriceTable(
    $input: UpdatePriceTableInput!
    $condition: ModelPriceTableConditionInput
  ) {
    updatePriceTable(input: $input, condition: $condition) {
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
export const deletePriceTable = /* GraphQL */ `
  mutation DeletePriceTable(
    $input: DeletePriceTableInput!
    $condition: ModelPriceTableConditionInput
  ) {
    deletePriceTable(input: $input, condition: $condition) {
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
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
