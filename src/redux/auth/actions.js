export const handleRefreshPending = state => {
  state.isRefreshing = true;
  state.error = null;
};

export const handleSubscribePending = state => {
  state.error = null;
};

export const handleReject = (state, { payload }) => {
  state.error = payload;
};

export const handleRefreshReject = (state, { payload }) => {
  state.isRefreshing = false;
  state.error = payload;
};

export const handleSubscribeReject = (state, { payload }) => {
  state.error = payload;
};

export const handleRegisterFulfilled = (state, { payload }) => {
  state.message = payload.message;
  state.error = null;
};

export const handleLoginFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
  state.error = null;
};

export const handleLogoutFulfilled = state => {
  state.user = { name: null, email: null, avatar: null };
  state.token = null;
  state.isLoggedIn = false;
  state.error = null;
};

export const handleRefreshFulfilled = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.error = null;
};

export const handleUpdateFulfilled = (state, { payload }) => {
  state.user.name = payload.name;
  state.user.avatar = payload.avatarURL;
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.error = null;
};
