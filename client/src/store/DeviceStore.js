import {makeAutoObservable} from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      {id: 1, name: 'fridges'},
      {id: 2, name: 'smartphones'},
    ]
    this._brands = [
      {id: 1, name: 'Apple'},
      {id: 2, name: 'Samsung'},
    ]
    this._devices = [
      {id: 1, name: 'IPhone 12 Pro', price: 999, rating: 5, img: 'https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-12-Pro/Pacific-Blue/Apple-iPhone-12-Pro-Pacific-Blue-frontimage.png'},
      {id: 2, name: 'IPhone 12 Pro', price: 999, rating: 5, img: 'https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-12-Pro/Pacific-Blue/Apple-iPhone-12-Pro-Pacific-Blue-frontimage.png'},
      {id: 3, name: 'IPhone 12 Pro', price: 999, rating: 5, img: 'https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-12-Pro/Pacific-Blue/Apple-iPhone-12-Pro-Pacific-Blue-frontimage.png'},
      {id: 4, name: 'IPhone 12 Pro', price: 999, rating: 5, img: 'https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-12-Pro/Pacific-Blue/Apple-iPhone-12-Pro-Pacific-Blue-frontimage.png'},
    ]
    makeAutoObservable(this)
  }

  setTypes(types) {
    this._types = types
  }
  setBrands(brands) {
    this._brands = brands
  }
  setDevices(devices) {
    this._devices = devices
  }

  get types() {
    return this._types
  }

  get brands() {
    return this._brands
  }

  get devices() {
    return this._devices
  }
}