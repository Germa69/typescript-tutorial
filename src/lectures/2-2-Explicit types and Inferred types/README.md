## Explicit types and Inferred types

### Explicit types

```
Khai báo kiểu dữ liệu trong typescript thì sử dụng dấu 2 chấm đằng sau tên biến (khai báo tường minh)
```

### Inferred types

```
- Typescript thông minh phát hiện (detect) được kiểu dữ liệu tương ứng ngay cả khi mình không khai báo cụ thể kiểu dữ liệu (suy luận)
```

### Erased types

```
Sau khi compile từ typescript sang javascript, tất cả type annotation sẽ bị xóa 
```

### Downleveling

```
- Tùy vào target mà code sau khi được combine ra javascript sẽ khác nhau
- Để đảm bảo target environment có thể hiểu và thực thi được code mình viết bên typescript
```

