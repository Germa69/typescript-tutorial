// TODO: Number enum

enum StatusOrder {
  PENDING, // 0
  IN_PROGRESS, // 1
  DONE, // 2
  CANCELLED, // 3
}

const stats1: StatusOrder = StatusOrder.PENDING;
const stats2: StatusOrder = 1;

console.log(StatusOrder[0]); // PENDING
console.log(StatusOrder['DONE']); // 2

// TODO: String enum

enum MediaType {
  JSON = 'application/json',
  XML = 'application/xml',
}

fetch('http://example.com/api/endpoint', {
  headers: {
    Accept: MediaType.JSON,
  },
}).then((res) => {
  // ...
});
