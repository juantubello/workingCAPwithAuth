namespace my.bookshop;

using {
  Country,
  managed
} from '@sap/cds/common';

entity Roles {
  admin  : Boolean;
  viewer : Boolean;
}

entity TwoFACode {
  image: String;
  secret: String;
}

entity verifyToken {
  key token: String;
  isValid: Boolean;
}

entity requests : managed {
  key id    : Integer;
      email : String;
      date  : String;
}

entity Books {
  key ID     : Integer;
      title  : localized String;
      author : Association to Authors;
      stock  : Integer;
}

entity Authors {
  key ID    : Integer;
      name  : String;
      books : Association to many Books
                on books.author = $self;
}

entity Orders : managed {
  key ID    : Integer;
      title : String;
      stock : Integer;
      book  : Association to Books
}
