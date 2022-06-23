## Equality / Comparison in typescript

### Compare "==" and "===" inside JS

```
- So sánh khác kiểu dữ liệu với ==, thì sẽ được chuyển về number để so sánh
- Với 3 dấu === thì sẽ giữ nguyên giá trị để so sánh
```

### Compare inside TS

```
- Typescript theo huynh hướng kiểm tra kiểu dữ liệu nên dùng "==" hay "===" mà khác kiểu dữ liệu thì vẫn báo lỗi
```

### Compare Object

```
- Object, array và function là tham chiếu
- Khi so sánh 2 tham chiếu, thì địa chỉ của tham chiếu được so sánh, chứ không phải giá trị thật sự
```

### Null vs undefined

```
- Something hasn't been initialized: undefined
- Something is currently unavailable
- null is equal to undefined if using ==
```
