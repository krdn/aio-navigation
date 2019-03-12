export interface Deserializable {
  // Serialize : 객체를 Json 문자열로 변환
  // Deserialize: json 문자열을 Object로 변환
  deserialize(input: any): this;
}
