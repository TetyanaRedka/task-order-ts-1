import api from "../../services/api";
import { StatusType } from "@/dto/types";

export const statusList = {
  state: {
    statusList: Array<StatusType>(),
  },
  mutations: {
    SET_STATUSLIST(state: any, data: Array<StatusType>) {
      state.statusList = data;
    },
  },

  actions: {
    async getStatusListAction(ctx: any) {
      const newStatusList = await api.getStatus();

      ctx.commit("SET_STATUSLIST", newStatusList.data);
    },
  },
  getters: {
    statusById: (state: any) => (id: number) => {
      return state.statusList.find((status: StatusType) => status.id === id);
    },
  },
};
