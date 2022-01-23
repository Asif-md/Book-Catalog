import IRoute from '../interfaces/route';
import BookList from '../pages/ViewBook';
import Books from '../pages/Books';

const routes: IRoute[] = [
    {
        path: '/',
        name: 'Book List',
        Component: Books,
        exact: true
    },
    {
        path: '/book/:id',
        name: 'View Book',
        Component: BookList,
        exact: true
    }
];

export default routes;
