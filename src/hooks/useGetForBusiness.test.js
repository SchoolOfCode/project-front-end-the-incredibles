import { render } from "@testing-library/react";
import nock from "nock";
import { useState } from 'react';
import useGetForBusiness from "./useGetForBusiness";

const mockData = {
    existingData: {
        existingId: 1234,
        businessName: "Macrame Master",
        businessPrimaryEmail: "macrameMan@testers.com"
    },
    newData: {
        businessName: "New Macrame",
        businessPrimaryEmail: "newMacrameMan@testers.com"
    }
}


function Harness({ Auth0Id, edit= "" }) {
    const {isLoading, data} = useGetForBusiness( Auth0Id, edit )
    return !isLoading &&
    <p>{data?.businessName}</p>
}

describe('useGetForBusiness', () => {
    
    afterEach(() => nock.cleanAll())

    
    
    test('useGetForBusiness calls API and returns data for exisiting business', async () => {
        const scope = nock(process.env.REACT_APP_BACKEND_URL)
        //CORS
            .defaultReplyHeaders({
                'access-control-allow-origin': '*',
                'access-control-allow-credentials': 'true' 
            })
            // allow interceptors to be called multiple times
            .persist()
            .get(`/${mockData.existingData.existingId}`)
            .reply(200, { ...mockData.existingData})


        //Arrange
        const {existingData} = mockData
        const { findByText } = await render(<Harness Auth0Id={existingData.existingId} edit="" />)

        //Act
        const element = await findByText(existingData.businessName)

        //Assert
        expect(element).toBeInTheDocument();

        expect(scope.isDone()).toBe(true)
    })

    test('useGetForBusiness calls API and returns data for new business', async () => {
        const scope = nock(process.env.REACT_APP_BACKEND_URL)
        //CORS
            .defaultReplyHeaders({
                'access-control-allow-origin': '*',
                'access-control-allow-credentials': 'true' 
            })
            // allow interceptors to be called multiple times
            .persist()
            .get(/.*/)
            .reply(404)
            .post(`/business/insertbybusiness`)
            .reply(201, { ...mockData.newData})

        //Arrange
        const {newData} = mockData
        const { findByText } = await render(<Harness Auth0Id="42" edit="" />)

        //Act
        const element = await findByText(newData.businessName);

        //Assert
        expect(element).toBeInTheDocument();

        expect(scope.isDone()).toBe(true)
    })
})