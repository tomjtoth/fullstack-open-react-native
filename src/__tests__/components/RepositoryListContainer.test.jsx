import { render, screen } from '@testing-library/react-native';
import RepositoryListContainer from '../../components/RepositoryList/Container'

const repositories = [
  {
    id: 'jaredpalmer.formik',
    fullName: 'jaredpalmer/formik',
    description: 'Build forms in React, without the tears',
    language: 'TypeScript',
    forksCount: 1589,
    stargazersCount: 21553,
    ratingAverage: 88,
    reviewCount: 4,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
  },
  {
    id: 'rails.rails',
    fullName: 'rails/rails',
    description: 'Ruby on Rails',
    language: 'Ruby',
    forksCount: 18349,
    stargazersCount: 45377,
    ratingAverage: 100,
    reviewCount: 2,
    ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/4223?v=4',
  },
  {
    id: 'django.django',
    fullName: 'django/django',
    description: 'The Web framework for perfectionists with deadlines.',
    language: 'Python',
    forksCount: 21015,
    stargazersCount: 48496,
    ratingAverage: 73,
    reviewCount: 5,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4',
  },
  {
    id: 'reduxjs.redux',
    fullName: 'reduxjs/redux',
    description: 'Predictable state container for JavaScript apps',
    language: 'TypeScript',
    forksCount: 13902,
    stargazersCount: 52869,
    ratingAverage: 0,
    reviewCount: 0,
    ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
  },
];

describe('RepoListContainer', () => {
  it('renders 1st item properly', () => {

    render(<RepositoryListContainer repositories={repositories} />);

    const [first] = screen.getAllByTestId('repositoryItem');

    expect(first).toHaveTextContent('jaredpalmer/formik');
    expect(first).toHaveTextContent('Build forms in React, without the tears');
    expect(first).toHaveTextContent('TypeScript');

    expect(first).toHaveTextContent('21.6k');
    expect(first).toHaveTextContent('1.6k');
    expect(first).toHaveTextContent('88');
    expect(first).toHaveTextContent('4');
  });
});
