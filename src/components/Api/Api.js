const root_domain = "http://localhost:8000";

const api = {
  register_api: `${root_domain}/accounts/register/`,
  login_api: `${root_domain}/accounts/login/`,
  refresh_token_api: `${root_domain}/accounts/refresh_token/`,
  category_api: `${root_domain}/api/list_category/`,
  job_list_api: `${root_domain}/api/list_job/`,
  post_job_api: `${root_domain}/api/post_job/`,
  filter_jobs_api: `${root_domain}/api/filter_jobs_by_category/<int:category_id>/`,
  view_single_job_api: `${root_domain}/api/view_single_job/<int:pk>`,
};

console.log("api file called");

export default api;
