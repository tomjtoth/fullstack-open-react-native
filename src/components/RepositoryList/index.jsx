import { useState } from 'react';
import useRepositories from '../../hooks/useRepositories';
import RepositoryListContainer from './Container';
import { Picker } from '@react-native-picker/picker';

const RepositoryList = () => {

  const [crit, setCrit] = useState('CREATED_AT');
  const [dir, setDir] = useState('ASC');
  const [picker, setPicker] = useState('latest');

  const { repositories } = useRepositories(crit, dir);

  return <>

    <Picker
      selectedValue={picker}
      onValueChange={val => {
        setPicker(val)

        switch (val) {
          case "highest":
            setCrit('RATING_AVERAGE')
            setDir('DESC')
            break;

          case "lowest":
            setCrit('RATING_AVERAGE')
            setDir('ASC')
            break;

          default:
            setCrit('CREATED_AT')
            setDir('DESC')
        }
      }}>

      {/* <Picker.Item label="select one..." value="latest" enabled={false} color='lightgray' /> */}
      <Picker.Item label="most recently reviewed" value="latest" />
      <Picker.Item label="highest rated" value="highest" />
      <Picker.Item label="lowest rated" value="lowest" />
    </Picker>
    <RepositoryListContainer repositories={repositories} />
  </>

};

export default RepositoryList;
