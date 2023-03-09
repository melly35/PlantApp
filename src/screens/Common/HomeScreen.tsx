import React, {useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Config from 'react-native-config';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCategories} from '../../context/slices/categoriesSlice';
import Actions from '../../redux/actions';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categoriesReducer.categories);
  console.log('categories', categories);

  useEffect(() => {
    dispatch(Actions.categoryAction.getCategories());

    return () => {};
  }, []);

  return (
    <SafeAreaView>
      <Text>
        Empty Screen{Config.API_URL} {JSON.stringify(categories)}
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
