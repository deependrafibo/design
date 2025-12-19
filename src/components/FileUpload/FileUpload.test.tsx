import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { FileUpload } from './FileUpload';
import '@testing-library/jest-dom';

// Mock the ModifiedProgressBar
jest.mock('../ModifiedProgressBar/ModifiedProgressBar', () => ({
  ModifiedProgressBar: ({ progress }: { progress: number }) => <div data-testid="progress-bar">{progress}%</div>,
}));

describe('FileUpload Component', () => {
  const mockOnChange = jest.fn();

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  it('should trigger file input on click', async () => {
    const { container } = render(
      <FileUpload
        className="test-upload"
        onChange={mockOnChange}
        multiple={true}
        label="File Upload"
        progress={0}
        status="loading"
      />,
    );

    const fileInput = container.querySelector('input[type="file"]');
    fireEvent.click(fileInput!);

    expect(fileInput).toBeInTheDocument();
  });

  it('should add selected files to the state and call onChange', async () => {
    const { container } = render(
      <FileUpload
        className="test-upload"
        onChange={mockOnChange}
        multiple={true}
        label="File Upload"
        progress={0}
        status="loading"
      />,
    );

    const fileInput = container.querySelector('input[type="file"]');
    const file = new File(['file content'], 'test.pdf', { type: 'application/pdf' });

    fireEvent.change(fileInput!, { target: { files: [file] } });

    await waitFor(() => {
      expect(mockOnChange).toHaveBeenCalled();
      expect(mockOnChange).toHaveBeenCalledWith([file]);
    });
  });

  it('should render the correct icon for PDF files', () => {
    render(
      <FileUpload
        className="test-upload"
        onChange={mockOnChange}
        multiple={true}
        label="File Upload"
        progress={0}
        status="loading"
      />,
    );

    const fileInput = screen.getByLabelText(/drop files here or click to upload/i);
    const file = new File(['file content'], 'test.pdf', { type: 'application/pdf' });

    fireEvent.change(fileInput, { target: { files: [file] } });

    const pdfIcon = screen.getByTestId('pdf-icon'); // Ensure you add the 'data-testid' in the icon component.
    expect(pdfIcon).toBeInTheDocument();
  });

  it('should delete the selected file when trash icon is clicked', async () => {
    const { container } = render(
      <FileUpload
        className="test-upload"
        onChange={mockOnChange}
        multiple={true}
        label="File Upload"
        progress={0}
        status="loading"
      />,
    );

    const fileInput = container.querySelector('input[type="file"]');
    const file = new File(['file content'], 'test.pdf', { type: 'application/pdf' });

    fireEvent.change(fileInput!, { target: { files: [file] } });

    const deleteButton = container.querySelector('button');
    fireEvent.click(deleteButton!);

    await waitFor(() => {
      expect(container.querySelector('button')).not.toBeInTheDocument();
    });
  });

  it('should render the progress bar with correct progress value', async () => {
    render(
      <FileUpload
        className="test-upload"
        onChange={mockOnChange}
        multiple={true}
        label="File Upload"
        progress={50}
        status="loading"
      />,
    );

    const progressBar = screen.getByTestId('progress-bar');
    expect(progressBar).toHaveTextContent('50%');
  });
});
