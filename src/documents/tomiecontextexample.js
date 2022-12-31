import { createContext, useEffect, useState } from "react";
import { saveToLocalStorage, getFromLocalStorage } from "./storage";
import * as DefaultInvoices from "../utils/data.json";
import { Invoice, Status } from "../types/invoice";
import { FilterStatus } from "../types/filter";

export const InvoiceContext = createContext({
  invoices: getFromLocalStorage("invoices") || DefaultInvoices,
  findInvoice: (id: string): Invoice | undefined => undefined,
  changeInvoiceStatus: (id: string, status: Status): void => {},
  addInvoice: (invoice: Invoice): void => {},
  deleteInvoice: (id: string): void => {},
  updateInvoice: (id: string, updatedInvoice: Invoice): void => {},
  getInvoicesByFilters: (filters: FilterStatus[]): void => {},
});

export const InvoiceContextProvider = ({ children }: any) => {
  const [invoices, setInvoices] = useState<Invoice[]>(
    getFromLocalStorage("invoices") || DefaultInvoices
  );

  useEffect(() => {
    const invoices = getFromLocalStorage("invoices");
    if (invoices) setInvoices(invoices);
  }, []);

  useEffect(() => {
    saveToLocalStorage("invoices", invoices);
  }, [invoices]);

  const findInvoice = (id: string): Invoice | undefined => {
    const invoice = Object.values(invoices).find(
      (invoice) => invoice.id === id
    );

    return invoice;
  };

  const changeInvoiceStatus = (id: string, status: Status) => {
    setInvoices((previousInvoices) => {
      const result = Object.values(previousInvoices).filter(
        (invoice: Invoice) => {
          if (invoice.id === id) {
            invoice.status = status;
          }
          if (invoice.id) return invoice;
          else return null;
        }
      );

      return result;
    });
  };

  const addInvoice = (invoice: Invoice) => {
    setInvoices((previousInvoices) => {
      return [...previousInvoices, invoice];
    });
  };

  const deleteInvoice = (id: string) => {
    setInvoices((previousInvoices) =>
      previousInvoices.filter((invoice) => {
        return invoice.id !== id;
      })
    );
  };

  const updateInvoice = (id: string, updatedInvoice: Invoice) => {
    setInvoices((previousInvoices) => {
      return previousInvoices.filter((invoice) => {
        if (invoice.id === id) {
          return updatedInvoice;
        }
        return invoice;
      });
    });
  };

  /**
   *
   * @param filters All filters and their value
   * @returns Filtered invoices
   *
   * Creates a Set out of all filters that are checked:
   *    - Filters out invoices not checked
   *    - if no filters are checked, return the invoices from LS
   */
  const getInvoicesByFilters = (filters: FilterStatus[]) => {
    let filterBy: string[] = [];

    Object.values(filters).forEach((item) => {
      if (item.value === true)
        return filterBy.push(item.filter.toString().toLowerCase());
    });

    const filterSet = new Set(filterBy);

    const results = Object.values(invoices).filter((invoice) =>
      filterSet.has(invoice.status)
    );

    if (filterSet.size) return results;

    return invoices;
  };

  return (
    <InvoiceContext.Provider
      value={{
        invoices,
        findInvoice,
        changeInvoiceStatus,
        addInvoice,
        deleteInvoice,
        updateInvoice,
        getInvoicesByFilters,
      }}
    >
      {children}
    </InvoiceContext.Provider>
  );
};
