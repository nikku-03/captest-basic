namespace demo ;
entity products{

    key ID: Integer;
    Name: String;
    Price: Decimal(9, 2);

    orders: Association to many orders on orders.ProductID= ID;
}
entity orders{
    
    key OrderID:   Integer;
    OrderDate: Integer;
    ProductID: Integer;
    Quantity: Integer;
    TotalAmount: Decimal(9,2);


}

