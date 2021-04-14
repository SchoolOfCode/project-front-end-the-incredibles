import { render } from "@testing-library/react";
import nock from "nock";
import useGetForCustomer from "./useGetForCustomer";

const mockData = {
    businessLink: "shop/macrame-master",
    data: {
        businessName: "Macrame Master",
        businessPrimaryEmail: "macrameMan@testers.com"
    }
}

function Harness({ businessLink }) {
    const {isLoading, data} = useGetForCustomer( businessLink )
   
    return !isLoading &&
    <p>{data?.businessName}</p>
}

describe('useGetForCustomer', () => {
    
    afterEach(() => nock.cleanAll())

    const scope = nock(process.env.REACT_APP_BACKEND_URL)
        //CORS
          .defaultReplyHeaders({
                'access-control-allow-origin': '*',
                'access-control-allow-credentials': 'true' 
            })
            // allow interceptors to be called multiple times
            .persist()
            .get(`/${mockData.businessLink}`)
            .reply(200, { ...mockData.data})


    test('useGetForCustomer calls API and returns data', async () => {
        //Arrange
        const { findByText } = await render(<Harness businessLink={mockData.businessLink} />)

        //Act
        const element = await findByText(mockData.data.businessName)

        //Assert
        expect(element).toBeInTheDocument();

        expect(scope.isDone()).toBe(true)
    })

})