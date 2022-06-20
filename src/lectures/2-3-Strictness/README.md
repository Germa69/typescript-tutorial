## Strictness

### What is the Strict flag ?

```
- Bật strict = true sẽ bật tất cả options liên quan tới strict lên true
- Mặc định các options liên quan tới strict là false (nhưng recommend sử dụng true)
- Config của từng option sẽ ưu tiên cao hơn so với "strict". Tức là strict=true, mà noImplicitAny=false thì giá trị cuối cùng là noImplicitAny=false
```

### Option: nolmplicitAny

```
- Khi typescript không thể xác định được kiểu dữ liệu của một biến nào đó, thì biến đó sẽ được mang kiểu dữ liệu any
- Khi bật lên true, nó sẽ báo lỗi nếu trường hợp này xảy ra, ngược lại bỏ qua lỗi này
```

### Option: strictNullChecks

```
- Khi bật lên true thì sẽ báo lỗi khi null / undefined được sử dụng không đúng
- Khi config false thì sẽ bỏ qua, nhưng rủi ro xảy ra lỗi lúc runtime
```

### Option: alwaysStrict

```
Khi bật lên true thì typescript sẽ luôn parse files ở chế độ strict mode và sẽ có "use strict" ở đầu file javascript được tạo ra
```

### Other options

```
- strictBindCallApply: Đảm bảo bind, call và apply được gọi đúng args
- strictFunctionTypes:Đảm bảo đúng kiểu dữ liệu cho params của func (không áp dụng method)
- strictPropertyInitialization: Đảm bảo thuộc tính của class phải được khởi tạo
- noImplicitThis: Đảm bảo this không mang kiểu dữ liệu any
- useUnknownInCatchVariables: Đảm bảo biến trong catch là kiểu unknown

```




