import { observable, action, runInAction } from 'mobx';

class LoginStore {

    @observable userName = "熊姣";

}

export default new LoginStore();