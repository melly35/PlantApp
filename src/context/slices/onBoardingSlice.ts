import {createSlice} from '@reduxjs/toolkit';
import {StackType} from '../../utils/enums';

const initialState = {
  stack: StackType.Onboarding,
};

export const onBoardingSlice = createSlice({
  name: 'onBoarding',
  initialState,
  reducers: {
    setOnboardingSuccess: state => {
      state.stack = StackType.App;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setOnboardingSuccess} = onBoardingSlice.actions;

export default onBoardingSlice.reducer;
