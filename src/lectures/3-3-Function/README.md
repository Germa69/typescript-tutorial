## Function

### Default function return type

```
Dựa trên từ khóa **return**, typescript có thể suy ra kiểu trả về.
```

### Explicit return type

```
Chỉ định hàm đó trả về kiểu dữ liệu là gì?
```

### Optional and default parameter

```
- Sử dụng dấu ? khi không truyền vào thì nhận là undefined
- Không thể truyền cùng lúc optional và default params
```

### Function Overload

```
Overload signatures từng vị trí phải match kiểu dữ liệu với nhau
```

### Other type: void and never

```
Hàm mà không return gì hết nhận kiểu dữ liệu là `void`
```

### Destructuring parameter

```
Gom lại thành 1 kiểu tham số là Object
```

### Bảng type compatible

```
- String, number, boolean: 3 kiểu primitive phổ biến
- Null: unavailable
- Undefined: not initialized
- Any: ignore type checking
- Unknown: not legal to do anything
- Void: Function has no return
- Never: Never return a value
```
