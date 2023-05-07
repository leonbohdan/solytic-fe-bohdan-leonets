import { defineStore, acceptHMRUpdate } from "pinia";
import { useMutation, provideApolloClient } from "@vue/apollo-composable";
import { LOGIN } from "@/graphql/login";
import apolloClient from "@/plugins/apollo-client";

interface State {
  user: UserInterface | null;
  loginUserLoading: boolean;
}

interface UserInterface {
  accessToken: AccessToken;
  user: User;
}

interface AccessToken {
  token: string;
  tokenType: string;
}

interface User {
  id: number;
}

export const useLoginStore = defineStore("useLoginStore", {
  state: (): State => ({
    user: null,
    loginUserLoading: false
  }),

  getters: {
    userToken(): string | null {
      return this.user ? this.user.accessToken.token : null;
    },
    userId(): number | null {
      return this.user ? this.user.user.id : null;
    }
  },

  actions: {
    async loginUser(userData: object) {
      provideApolloClient(apolloClient);

      this.loginUserLoading = true;

      const { mutate: sendLoginRequest, onDone, onError } = useMutation(LOGIN);

      onError((error) => {
        console.error("onError error", error);
      });

      onDone(({ data }) => {
        this.user = data.loginUser;

        this.loginUserLoading = false;
      });

      await sendLoginRequest(userData);
    }
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLoginStore, import.meta.hot));
}
