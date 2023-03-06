import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  database=[
    {"CustomerTypeId":1,"CustomterTypeName":"VIP",
    "Customers":[{
      "Id":"Cus123",
      "Name":"Obama",
      "Email":"obama@gmail.com",
      "Age":67,
      "Image":"assets/obama-avatar.png"
    },
    {
      "Id":"Cus456",
      "Name":"Kim jong Un",
      "Email":"unun@gmail.com",
      "Age":38,
      "Image":"assets/unun-avatar.png"
    }
    ,
    {
      "Id":"Cus789",
      "Name":"Putin",
      "Email":"putin@gmail.com",
      "Age":77,
      "Image":"assets/putin-avatar.png"
    }]
    },
    {"CustomerTypeId":2,"CustomterTypeName":"Normal",
    "Customers":[{
      "Id":"Cus000",
      "Name":"Hồ Cẩm Đào",
      "Email":"hodao@gmail.com",
      "Age":16,
      "Image":"assets/hodao-avatar.png"
    },
    {
      "Id":"Cus111",
      "Name":"Tap Can Binh",
      "Email":"binhbinh@gmail.com",
      "Age":67,
      "Image":"assets/binhbinh-avatar.png"
    },
    ]
    },
  ]
  constructor() { }
  getAllCustomers()
  {
    return this.database
  }
}
