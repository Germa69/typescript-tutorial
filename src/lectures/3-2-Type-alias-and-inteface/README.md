## Type Alias and Interface

```
- Type alias: Đặt tên cho kiểu dữ đó với 1 tên mới
- Interface: Một cách đặt tên cho một object type
```
### Primitive type

```
- Sử dụng từ khóa "type" để đặt tên kiểu dữ liệu
- Chứa dấu "=" khi khai báo
- VD:
    type studentName = string
```

### Object type

```
- Định nghĩa cho 1 Object, Array, Function
- Sử dụng Interface thì không có dấu "="
- Nếu muốn thuộc tính có / không thì thêm dấu ?. trước khai báo kiểu dữ liệu
- Khi sử dụng **readonly** thì không cho phép cập nhật giá trị của thuộc tính (Lúc tạo thì có thể gán được giá trị)
```

### Union type

```
- Kết hợp từ 2 hay nhiều kiểu dữ liệu lại với nhau để tạo ra một kiểu dữ liệu mới
- Cho phép giá trị có thể chấp nhận hoặc là kiểu dữ liệu này, hoặc là kiểu dữ liệu kia
- Sử dụng dấu `|`
```

### Intersection type 

```
- Gom lại thuộc tính của Interface hoặc type
- Sử dụng dấu `&`
```

### Add new props

```
- Đối với interface thì cho phép gắn thêm kiểu dữ liệu 
- Ngược lại thì alias không cho phép 
```

### Naming type vs Interface

```
- Sử dụng PascalCase thay vì camelCase. 
- Đối với Interface không nên sử dụng prefix `I`
```

### Using interface or type

```
- Luôn sử dụng interface trước khi cần đến type
- Dùng interface để public API's definition
```