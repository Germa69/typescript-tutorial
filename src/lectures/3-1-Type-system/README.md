## AGENDA

```
1. Type system overview
2. Type Alias and interface
3. Function 
4. Enums
5. Generics
6. Utility types
7. And more
```

## Type system overview 

### Common data types

```
- Các kiểu dữ liệu bạn đã biết bên JavaScript:
    + Primitive: Number, String, Boolean, Null, Undefined, Symbol
    + Reference: Array, Object, Function, ...
- Còn typescript, bạn sẽ bắt gặp: **any**, unknown, void, never, ...
```

### Literal types

```
- Chỉ định một giá trị cụ thể làm kiểu dữ liệu
    + Let thay đổi được nên nó lấy tập hợp kiểu dữ liệu là number
    + Với const, khi omit type annotation, literal type sẽ được sử dụng. Vì const chỉ nhận được 1 giá trị, không thể thay đổi được

- Không muốn thay đổi giá trị của một Object
```

### Type Assertion

```
- Type assertion: 
    + Dùng toán tử "as"
    + Giúp typescript hiểu được mình muốn gì (Nhưng phụ thuộc trong khoảng dữ liệu là cha con)
- Type casting: Ép kiểu lúc runtime
```