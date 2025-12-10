using demo from '../db/schema1';
service ordservice {
    entity orders as projection on demo.orders;
    entity products as projection on demo.products;

    

    //     OrderID,
    //     OrderDate,
    //     ProductID,
    //     Quantity,
    //     TotalAmount

        
    // };

    

}
