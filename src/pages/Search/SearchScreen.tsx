import {StyleSheet, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../../theme/colors/colors';
import {windowWidth} from '../../constants/ScreenSize/size';
import SearchIcon from '../../assets/icons/general/SearchIcon/SearchIcon';
import CustomCategory from '../../components/CustomCategory';
import Header from '../../components/Header';

const SearchScreen = () => {
  const [search, setSearch] = useState('');
  const [color, setColor] = useState(false);
  const [focusColor, setFocusColor] = useState(false);

  useEffect(() => {
    if (search.length === 0) {
      setColor(false);
    } else if (search.length) {
      setColor(true);
    }
  }, [search]);

  return (
    <View style={styles.container}>
      <Header />
      <View
        style={[
          styles.inputView,
          {
            borderColor: focusColor ? colors.lightyalow : colors.white,
          },
        ]}>
        <TextInput
          value={search}
          onChangeText={setSearch}
          style={styles.input}
          placeholder="Search"
          keyboardType="default"
          autoCorrect={false}
          autoCapitalize="none"
          autoComplete="name"
          onFocus={() => setFocusColor(true)}
          onBlur={() => {
            search.length ? null : setFocusColor(false);
          }}
          placeholderTextColor={colors.white}
        />
        <SearchIcon
          size={18}
          stroke={color ? colors.lightyalow : colors.white}
        />
      </View>
      <CustomCategory />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.bgApp,
  },
  inputView: {
    height: 40,
    paddingRight: 20,
    borderWidth: 1,
    display: 'flex',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: windowWidth - 40,
    backgroundColor: colors.bgApp,
    justifyContent: 'space-between',
    borderColor: colors.lightyalow,
  },
  input: {
    paddingLeft: 15,
    fontSize: 16,
    color: colors.white,
    width: '90%',
  },
});
