export const state = () => ({
  id: 0,
  face_image_url: '',
  nickname: '',
  email: '',
  pin: undefined
})

export const getters = {
  id: state => state.id,
  face_image_url: state => state.face_image_url,
  email: state => state.email,
  nickname: state => state.nickname,
  datetime: state => (state.pin ? state.pin.datetime : ''),
  latitude: state => (state.pin ? state.pin.latitude : 0),
  longitude: state => (state.pin ? state.pin.longitude : 0)
}

export const mutations = {
  setMe(state, { id, face_image_url, email, nickname, pin }) {
    state.id = id
    state.face_image_url = face_image_url
    state.email = email
    state.nickname = nickname
    state.pin = pin
  },
  updateImage(state, url) {
    state.face_image_url = url
  }
}
