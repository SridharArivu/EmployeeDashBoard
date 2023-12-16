
import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    loading: false,
    data: [],
    error: null,
    filteredData: [],
    employee:{},
  },
  reducers: {
    fetchDataStart: state => {
      state.loading = true;
    },
    fetchDataSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    fetchDataFailure: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    SearchData : (state,action) =>{
      const searchTerm = action.payload;
      console.log(searchTerm);
    
      if (searchTerm.length !== 0) {
        const originalData = state.data;
    
        const filterData = originalData.filter(item => {
          // Adjust the condition based on your data structure
          return item.id.toString().toLowerCase().includes(searchTerm.toLowerCase());
        });
    
        return {
          ...state,
          filteredData: filterData,
        };
      } else {
        return {
          ...state,
          filteredData: state.data,
        };
      }
    },
    deleteItem: (state, action) => {
      const itemIdToDelete = action.payload;
        const filterData = state.data.filter(item => {
          return item.id !== itemIdToDelete;
        });
      return {
        ...state,
        data: filterData,
        filteredData: filterData,
      };
    },
    SelectEmployee: (state,action) => {
      const employee = action.payload;
      const Filterdata = state.data.filter(item => {
        return item.id === employee.id;
      });
      return {
        ...state,
        employee: Filterdata,
      };
    }
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure,SearchData,deleteItem,SelectEmployee} = dataSlice.actions;
export default dataSlice.reducer;
