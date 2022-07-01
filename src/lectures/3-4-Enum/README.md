## Enum in TypeScript

```
- What: Tập hợp các giá trị cùng nhóm.
- Why: Dễ dàng quản lý và truy xuất
- When: Sử dụng cho data một chiều, định nghĩa enum -> rồi sử dụng
```

### Number enum

```
- Viết enum dưới dạng Pascal Case
- Đinh nghĩa hằng số dùng UPPER Case
- Có thể gán bất kỳ số nào cho biến enum của bạn
- Đối với number enum thì hỗ trợ reverse mapping 
```

### String enum

```
- Đối với string enum thì không hỗ trợ reverse mapping 
```

### When to use enum

```
- Dữ liệu tĩnh trên Giao diện người dùng, không phải dữ liệu từ phản hồi API
- Không bắt buộc phải đảo ngược bản đồ
- Ưu tiên các loại union type cho dữ liệu được trả về từ API
```

### How enum compiled to JavaScript

```
Khi enum được biên dịch sang JavaScript thì: number enum hỗ trợ reverse mapping còn string enum khi dùng chiều ngược lại thì nhận lỗi undefined
```