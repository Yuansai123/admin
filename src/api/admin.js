import axios from '../utils/axios'
class Login {
    dels(userId){
      let url = '/admin/manage/user/delete'
      return axios.post(url,userId)
    }
    add(data){
        let {username,password,phone,email}=data
      let url = '/admin/manage/user/add'
      return axios.post(url,{username,password,phone,email})
    }
    list(page = 1,pageSize =5){
      let url = '/admin/manage/user/list'
      return axios.get(url,{params:{page,pageSize}})
    }
}
export default new Login()