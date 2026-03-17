import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { EyeCard } from './EyeCard';

// Mock all asset imports
vi.mock('../assets/computer.png', () => ({ default: '' }));
vi.mock('../assets/buttonbg1.png', () => ({ default: '' }));
vi.mock('../assets/buttonbg2.png', () => ({ default: '' }));
vi.mock('../assets/togglebg.png', () => ({ default: '' }));
vi.mock('../assets/toggleleft.png', () => ({ default: '' }));
vi.mock('../assets/toggleright.png', () => ({ default: '' }));
vi.mock('../assets/botheyes.png', () => ({ default: '' }));
vi.mock('../assets/left-eye.png', () => ({ default: '' }));
vi.mock('../assets/right-eye.png', () => ({ default: '' }));
vi.mock('../assets/left-pupil.png', () => ({ default: '' }));
vi.mock('../assets/right-pupil.png', () => ({ default: '' }));
vi.mock('../assets/notification.wav', () => ({ default: '' }));

vi.mock('../hooks/useTheme', () => ({
  useTheme: () => ({ theme: 'light', setTheme: vi.fn() }),
}));

beforeEach(() => {
  vi.useFakeTimers();
  window.Audio = vi.fn(function () {
    this.play = vi.fn().mockResolvedValue(undefined);
  });
});

afterEach(() => {
  vi.useRealTimers();
  vi.restoreAllMocks();
});

describe('Timer Logic', () => {
  it('renders initial Study timer as 25:00', () => {
    render(<EyeCard />);
    expect(screen.getByText('25:00')).toBeInTheDocument();
  });

  it('shows 05:00 when Break tab is clicked', () => {
    render(<EyeCard />);
    fireEvent.click(screen.getByText('Break'));
    expect(screen.getByText('05:00')).toBeInTheDocument();
  });

  it('counts down by 1 second after Start is clicked', async () => {
    render(<EyeCard />);
    fireEvent.click(screen.getByText('Start'));
    await act(async () => {
      vi.advanceTimersByTime(1000);
    });
    expect(screen.getByText('24:59')).toBeInTheDocument();
  });

  it('auto-switches to Break mode after Study timer expires (1500s)', async () => {
    render(<EyeCard />);
    fireEvent.click(screen.getByText('Start'));
    await act(async () => {
      vi.advanceTimersByTime(1500 * 1000);
    });
    expect(screen.getByText('05:00')).toBeInTheDocument();
  });
});

describe('Control Functionality', () => {
  it('Start button is initially rendered', () => {
    render(<EyeCard />);
    expect(screen.getByText('Start')).toBeInTheDocument();
  });

  it('clicking Start changes button to Pause', () => {
    render(<EyeCard />);
    fireEvent.click(screen.getByText('Start'));
    expect(screen.getByText('Pause')).toBeInTheDocument();
  });

  it('clicking Pause stops the timer', async () => {
    render(<EyeCard />);
    fireEvent.click(screen.getByText('Start'));
    await act(async () => {
      vi.advanceTimersByTime(1000);
    });
    fireEvent.click(screen.getByText('Pause'));
    await act(async () => {
      vi.advanceTimersByTime(5000);
    });
    expect(screen.getByText('24:59')).toBeInTheDocument();
  });

  it('timer is paused by default (time does not change without clicking Start)', async () => {
    render(<EyeCard />);
    await act(async () => {
      vi.advanceTimersByTime(5000);
    });
    expect(screen.getByText('25:00')).toBeInTheDocument();
  });
});

describe('State Transition', () => {
  it('auto-switches to Break mode after Study timer expires', async () => {
    render(<EyeCard />);
    fireEvent.click(screen.getByText('Start'));
    await act(async () => {
      vi.advanceTimersByTime(1500 * 1000);
    });
    expect(screen.getByText('05:00')).toBeInTheDocument();
  });

  it('clicking Study tab resets to 25:00', () => {
    render(<EyeCard />);
    fireEvent.click(screen.getByText('Break'));
    fireEvent.click(screen.getByText('Study'));
    expect(screen.getByText('25:00')).toBeInTheDocument();
  });

  it('clicking Break tab resets to 05:00', () => {
    render(<EyeCard />);
    fireEvent.click(screen.getByText('Break'));
    expect(screen.getByText('05:00')).toBeInTheDocument();
  });

  it('mode tabs stop the running timer', async () => {
    render(<EyeCard />);
    fireEvent.click(screen.getByText('Start'));
    await act(async () => {
      vi.advanceTimersByTime(2000);
    });
    fireEvent.click(screen.getByText('Break'));
    await act(async () => {
      vi.advanceTimersByTime(5000);
    });
    expect(screen.getByText('05:00')).toBeInTheDocument();
  });
});
