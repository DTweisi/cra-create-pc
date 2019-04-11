const api= {
  getHomeData:{
    method:'get',
    url:'/mock/homeData.json'
  },
  getNavData:{
    method:'get',
    url:'/mock/navData.json'
  },
  getUserData:{
    method:'get',
    url:'/mock/userData.json'
  },
  getUserList:{
    method:'get',
    url:'/mock/userList.json'
  },
  getSearchTableData:{
    method:'get',
    url:'/mock/searchTableData.json'
  },
  getOptionData:{
    method:'get',
    url:'/mock/optionData.json'
  },
  saveTabelData:{
    method:'get',
    url:'/mock/success.json'
  },
  getListData:{
    method:'get',
    url:'/mock/listData.json'
  },
  getDetailData:{
    method:'get',
    url:'/mock/detailData.json'
  },
  // 数据全景 首页
  getDepartmentIncome: {
    method:'get',
    url: '/mock/dsUpTableData.json'
  },
  getDownTableData: {
    method: 'get',
    url: '/mock/dsDownTableData.json'
  },
  // 数据全景 资产类目
  getUpBlockData: {
    method: 'get',
    url: '/mock/categoryData.json'
  },
  // 个人资产
  getAssetsDetailData: {  // 获取资产明细
    method: 'get',
    url: '/mock/assetsDetailData.json'
  },
  getOverviewData: {  // 获取数据概览
    method: 'get',
    url: '/mock/overviewData.json'
  }
  
}
export default api;