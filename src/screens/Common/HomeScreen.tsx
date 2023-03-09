import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {CategoryList} from '../../components/CategoryList';
import {HomeHeader} from '../../components/HomeHeader';
import {PaywallUpgradeButton} from '../../components/PaywallUpgradeButton';
import {QuestionList} from '../../components/QuestionList';
import Actions from '../../redux/actions';
import {horizontalScale, verticalScale} from '../../utils/metrics';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categoriesReducer.categories);
  const categoriesLoading = useSelector(
    state => state.categoriesReducer.loading,
  );
  const questions = useSelector(state => state.questionsReducer.questions);
  const questionsIsLoading = useSelector(
    state => state.questionsReducer.loading,
  );
  console.log('categories', questions);

  useEffect(() => {
    dispatch(Actions.categoryAction.getCategories());
    dispatch(Actions.questionAction.getQuestions());

    return () => {};
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FBFAFA'}}>
      <HomeHeader />
      <ScrollView style={{flex: 1}}>
        <PaywallUpgradeButton
          label="Free Premium Available"
          subLabel="Tap to upgrade your account!"
          style={[styles.homePadding]}
        />
        <QuestionList
          data={questions}
          style={{paddingLeft: horizontalScale(24)}}
        />
        <CategoryList
          data={categories}
          style={{paddingHorizontal: horizontalScale(24)}}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homePadding: {
    marginHorizontal: horizontalScale(24),
    marginVertical: verticalScale(20),
  },
});

export default HomeScreen;
